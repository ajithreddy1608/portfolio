"use client";

import React, { useState, useEffect } from "react";
import { GitHubRepo } from "@/app/api/github/repos/route";
import {
  Github,
  Star,
  GitFork,
  ExternalLink,
  Search,
  RefreshCw,
  FolderGit2,
  Code2,
  Clock,
} from "lucide-react";

export default function GitHubReposExplorer() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [source, setSource] = useState<string>("live");

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/github/repos");
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      setRepos(data.repos || []);
      setSource(data.source || "live");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load repositories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter(
    (r) =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.description &&
        r.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (r.language &&
        r.language.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="liquid-card p-6 sm:p-8 mt-16 border-blue-500/20">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 border border-blue-400/20 text-cyan-400">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Public GitHub Repositories</span>
              <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                {repos.length} Repos
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Live synchronized with @ajithreddy1608 GitHub account
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={fetchRepos}
            disabled={loading}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
            title="Refresh repositories"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
          <a
            href="https://github.com/ajithreddy1608"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] text-xs font-medium text-white transition-all hover:scale-[1.02]"
          >
            <Github className="w-4 h-4" />
            <span>Visit Profile</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Search Bar */}
      <div className="pt-6 pb-4">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search repositories by name, language, or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-cyan-400/50 focus:outline-none text-white placeholder-slate-500 transition-colors"
          />
        </div>
      </div>

      {/* Content States */}
      {loading ? (
        <div className="py-12 flex flex-col items-center justify-center text-center">
          <RefreshCw className="w-6 h-6 text-cyan-400 animate-spin mb-3" />
          <p className="text-xs text-slate-400">
            Querying GitHub API for public repositories...
          </p>
        </div>
      ) : error ? (
        <div className="py-8 text-center text-xs text-red-400">
          <p>Unable to reach GitHub API directly: {error}</p>
          <button
            onClick={fetchRepos}
            className="mt-2 px-3 py-1 bg-white/10 rounded-lg text-white"
          >
            Retry
          </button>
        </div>
      ) : filteredRepos.length === 0 ? (
        <div className="py-8 text-center text-xs text-slate-400">
          No repositories match your filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {filteredRepos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-blue-400/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <FolderGit2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="text-xs font-semibold text-white group-hover:text-cyan-300 truncate">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-white shrink-0" />
                </div>

                <p className="text-[11px] text-slate-400 line-clamp-2 mb-3 leading-relaxed">
                  {repo.description || "Public repository for active development & experimentation."}
                </p>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/[0.04]">
                <div className="flex items-center gap-1.5 font-mono">
                  {repo.language && (
                    <span className="flex items-center gap-1 text-cyan-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {repo.language}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 text-amber-400/70" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <GitFork className="w-3 h-3 text-slate-400" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
