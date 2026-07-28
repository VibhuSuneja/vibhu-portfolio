"use client";

import { useEffect, useState } from 'react';
import { GitHubApiResponse, GitHubRepoData } from '@/app/api/github/route';

export function useGitHubData() {
  const [data, setData] = useState<GitHubApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json: GitHubApiResponse = await response.json();
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
          setLoading(false);
        }
      }
    }

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, []);

  const getRepoStats = (githubUrlOrName: string): GitHubRepoData | null => {
    if (!data || !data.repos) return null;

    let repoName = githubUrlOrName.trim();
    if (repoName.includes('github.com/')) {
      const parts = repoName.split('github.com/')[1].split('/');
      repoName = parts[1] || parts[0] || repoName;
    }

    // Strip trailing slashes or parameters
    repoName = repoName.replace(/\/$/, '').toLowerCase();

    return data.repos[repoName] || null;
  };

  return {
    data,
    loading,
    error,
    getRepoStats,
  };
}
