import { NextResponse } from 'next/server';

export interface GitHubRepoData {
  name: string;
  stars: number;
  forks: number;
  openIssues: number;
  language: string | null;
  pushedAt: string;
  url: string;
}

export interface GitHubProfileStats {
  publicRepos: number;
  followers: number;
  totalStars: number;
  totalForks: number;
}

export interface GitHubApiResponse {
  success: boolean;
  profile: GitHubProfileStats;
  repos: Record<string, GitHubRepoData>;
  fetchedAt: string;
  error?: string;
}

const GITHUB_USERNAME = 'VibhuSuneja';

// Fallback baseline metadata in case of network or rate-limit issues
const FALLBACK_STATS: GitHubApiResponse = {
  success: true,
  profile: {
    publicRepos: 25,
    followers: 12,
    totalStars: 45,
    totalForks: 18,
  },
  repos: {
    devlok: { name: 'devlok', stars: 14, forks: 5, openIssues: 0, language: 'TypeScript', pushedAt: '2026-07-20T00:00:00Z', url: 'https://github.com/VibhuSuneja/devlok' },
    agrowcart: { name: 'Agrowcart', stars: 12, forks: 4, openIssues: 0, language: 'TypeScript', pushedAt: '2026-07-15T00:00:00Z', url: 'https://github.com/VibhuSuneja/Agrowcart' },
    'learningmanagement_system-': { name: 'LearningManagement_system-', stars: 8, forks: 2, openIssues: 0, language: 'JavaScript', pushedAt: '2026-06-10T00:00:00Z', url: 'https://github.com/VibhuSuneja/LearningManagement_system-' },
  },
  fetchedAt: new Date().toISOString(),
};

export async function GET() {
  try {
    const headers: Record<string, string> = {
      'User-Agent': 'Vibhu-Portfolio-App',
      'Accept': 'application/vnd.github.v3+json',
    };

    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    // Fetch user profile and repositories in parallel
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers,
        next: { revalidate: 300 }, // 5 minutes cache
      }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
        headers,
        next: { revalidate: 300 }, // 5 minutes cache
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      console.warn(`GitHub API returned non-OK status: user=${userRes.status}, repos=${reposRes.status}`);
      return NextResponse.json(
        { ...FALLBACK_STATS, error: 'Using cached fallback due to GitHub API rate limit' },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
          },
        }
      );
    }

    const userData = await userRes.json();
    const reposData: Array<{
      name: string;
      stargazers_count: number;
      forks_count: number;
      open_issues_count: number;
      language: string | null;
      pushed_at: string;
      html_url: string;
    }> = await reposRes.json();

    let totalStars = 0;
    let totalForks = 0;
    const reposMap: Record<string, GitHubRepoData> = {};

    reposData.forEach((repo) => {
      totalStars += repo.stargazers_count || 0;
      totalForks += repo.forks_count || 0;

      const repoInfo: GitHubRepoData = {
        name: repo.name,
        stars: repo.stargazers_count || 0,
        forks: repo.forks_count || 0,
        openIssues: repo.open_issues_count || 0,
        language: repo.language,
        pushedAt: repo.pushed_at,
        url: repo.html_url,
      };

      // Store by lowercased name for reliable lookup
      reposMap[repo.name.toLowerCase()] = repoInfo;
    });

    const responsePayload: GitHubApiResponse = {
      success: true,
      profile: {
        publicRepos: userData.public_repos ?? reposData.length,
        followers: userData.followers ?? 0,
        totalStars,
        totalForks,
      },
      repos: reposMap,
      fetchedAt: new Date().toISOString(),
    };

    return NextResponse.json(responsePayload, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json(
      { ...FALLBACK_STATS, error: 'Internal fetch error, fallback active' },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    );
  }
}
