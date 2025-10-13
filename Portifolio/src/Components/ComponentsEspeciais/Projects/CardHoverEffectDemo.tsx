import React, { useEffect, useState } from "react";
import { HoverEffect } from "./card-hover-effect";
import { Particles } from "../Particle";
import "./CardHover.css";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  created_at: string;
}

interface Project {
  title: string;
  description: string;
  link: string;
}

export function CardHoverEffectDemo() {
  const [repositories, setRepositories] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Rafael-HQ/repos?per_page=9")
      .then(response => response.json())
      .then((data: GitHubRepo[]) => {
        const mappedRepos: Project[] = data
          .map((repo: GitHubRepo) => ({
            title: repo.name,
            description: repo.description || "Sem descrição disponível.",
            link: repo.html_url,
          }))
          .slice(0, 9);

        setRepositories(mappedRepos);
      })
      .catch(error => console.error("Erro ao buscar repositórios:", error));
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={500}
        ease={80}
        color="#ad34dd"
        refresh
        />

      <div className="relative z-10">
        <h1
          style={{
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "2rem",
          }}
          >
          Repositórios
        </h1>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={repositories} />
        </div>
      </div>
    </div>
  );
}
