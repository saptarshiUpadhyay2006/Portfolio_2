import { useState, useEffect } from "react";
import { CP_STATS } from "../data";

const CACHE_KEY = "saptarshi_live_stats_v1";
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

export function useLiveStats() {
  const [stats, setStats] = useState(() => {
    // Attempt cache read
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
          return data;
        }
      }
    } catch (e) {
      // ignore
    }
    return {
      leetcode: {
        rating: CP_STATS.leetcode.rating,
        solved: CP_STATS.leetcode.solved,
        solvedCount: 1000,
        rank: CP_STATS.leetcode.top,
        label: CP_STATS.leetcode.label,
        isLive: false,
      },
      github: {
        publicRepos: 18,
        followers: 12,
        isLive: false,
      },
      loading: true,
    };
  });

  useEffect(() => {
    let mounted = true;

    async function fetchStats() {
      let liveLeetCode = null;
      let liveGithub = null;

      // 1. Fetch LeetCode API
      try {
        const res = await fetch("https://leetcode-stats-api.herokuapp.com/saptarshiupadhyay");
        if (res.ok) {
          const json = await res.json();
          if (json.status === "success" && json.totalSolved) {
            liveLeetCode = {
              rating: CP_STATS.leetcode.rating, // 1882 Knight
              solved: `${json.totalSolved}+`,
              solvedCount: json.totalSolved,
              rank: json.ranking ? `#${json.ranking.toLocaleString()}` : CP_STATS.leetcode.top,
              label: "Knight",
              easySolved: json.easySolved,
              mediumSolved: json.mediumSolved,
              hardSolved: json.hardSolved,
              isLive: true,
            };
          }
        }
      } catch (err) {
        console.log("LeetCode API fallback:", err);
      }

      // 2. Fetch GitHub API
      try {
        const res = await fetch("https://api.github.com/users/saptarshiUpadhyay2006");
        if (res.ok) {
          const json = await res.json();
          if (json.public_repos !== undefined) {
            liveGithub = {
              publicRepos: json.public_repos,
              followers: json.followers,
              avatarUrl: json.avatar_url,
              isLive: true,
            };
          }
        }
      } catch (err) {
        console.log("GitHub API fallback:", err);
      }

      if (!mounted) return;

      const newStats = {
        leetcode: liveLeetCode || {
          rating: CP_STATS.leetcode.rating,
          solved: CP_STATS.leetcode.solved,
          solvedCount: 1000,
          rank: CP_STATS.leetcode.top,
          label: CP_STATS.leetcode.label,
          isLive: false,
        },
        github: liveGithub || {
          publicRepos: 18,
          followers: 12,
          isLive: false,
        },
        loading: false,
      };

      setStats(newStats);

      try {
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: newStats, timestamp: Date.now() })
        );
      } catch (e) {
        // ignore storage errors
      }
    }

    fetchStats();

    return () => {
      mounted = false;
    };
  }, []);

  return stats;
}
