import { NextResponse } from "next/server";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
  topics: string[];
}

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1457874446,
    name: "Processor-Architecture-Design",
    full_name: "ajithreddy1608/Processor-Architecture-Design",
    html_url: "https://github.com/ajithreddy1608/Processor-Architecture-Design",
    description: "High-performance architecture simulation suite benchmarking computational speed, parallel matrix operations, and execution latency across CPU, GPU, and TPU architectures.",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-11-14T15:14:02Z",
    homepage: null,
    topics: ["fastapi", "numpy", "cpu-gpu-tpu", "hpc", "deep-learning-benchmark"],
  },
  {
    id: 1457868752,
    name: "Online-Resume-Builder",
    full_name: "ajithreddy1608/Online-Resume-Builder",
    html_url: "https://github.com/ajithreddy1608/Online-Resume-Builder",
    description: "Modern, reactive resume builder application featuring real-time preview, modular section editing, and ATS-friendly typography.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-11-14T15:08:45Z",
    homepage: null,
    topics: ["react", "vite", "resume-builder", "frontend", "spa"],
  },
  {
    id: 1457859841,
    name: "Red-connect",
    full_name: "ajithreddy1608/Red-connect",
    html_url: "https://github.com/ajithreddy1608/Red-connect",
    description: "Emergency healthcare blood donor matching platform with Mapbox geolocation, donor dashboard, and urgent request routing powered by Supabase.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-11-14T14:56:23Z",
    homepage: null,
    topics: ["react", "typescript", "supabase", "mapbox", "tailwind-css", "drizzle-orm"],
  },
];

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/ajithreddy1608/repos?per_page=100&sort=updated",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "KattaAjithReddy-Portfolio-App",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({
        repos: FALLBACK_REPOS,
        source: "cached",
        status: res.status,
      });
    }

    const data: GitHubRepo[] = await res.json();
    return NextResponse.json({
      repos: data,
      source: "live",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      repos: FALLBACK_REPOS,
      source: "fallback",
      error: error instanceof Error ? error.message : "Network error",
    });
  }
}
