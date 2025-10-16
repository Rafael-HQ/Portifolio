"use client";
import React from "react";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./tracing-beam";
import "./TracingBeamDemo.css"
import Escola from "../../../../assets/PUC-Betim.jpg"
import Celeste from "../../../../assets/Celestegif.gif"
import Persona from "../../../../assets/Sobremim.gif"


export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="tracing-beam-container">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="tracing-beam-item">
            <h2 className="tracing-beam-badge" data-aos="fade-down-right" data-aos-duration="1500">{item.badge}</h2>
            <p className="tracing-beam-title" data-aos="fade-down-right" data-aos-duration="2000">{item.title}</p>
            <div className="tracing-beam-description">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  className="tracing-beam-image"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Quem sou eu?",
    description: (
      <>
        <p>
          Oi! Eu sou o Rafael Henrique, tenho 20 anos e estou cursando Análise
          e Desenvolvimento de Sistemas. Sempre fui fascinado por tecnologia, gosto
          de entender como as coisas funcionam e de imaginar o que ainda podemos criar com ela.
        </p>
        <br />
        <p>
          Além disso, tenho um grande interesse pelo espaço. Acho incrível pensar no quanto o universo é vasto e cheio de mistérios.
        </p>
        <br />
        <p>
          Nos meus momentos livres, gosto de jogar e de fotografar. Jogos me ajudam a
          relaxar e a me inspirar, e a fotografia é o meu jeito de guardar pequenos pedaços do mundo do meu jeito.
        </p>
      </>
    ),
    badge: "Sobre mim",
    image:
      Persona,
  },
  {
    title: "Destaque Acadêmico - Projeto 'Hair Day' (Puc Minas, 2025)",
    description: (
      <>
        <p>
          Recentemente, participei do desenvolvimento do projeto “Hair Day”, realizado
          durante o curso de Análise e Desenvolvimento de Sistemas na PUC Minas Virtual.
          Esse projeto foi reconhecido como destaque do Eixo 2 no primeiro semestre de 2025,
          durante a Mostra de Projetos da universidade.
        </p>
        <br />
        <p>
          Trabalhar nesse projeto foi uma experiência incrível, envolveu muita dedicação, aprendizado
          em equipe e aplicação prática do que venho estudando. Ver o projeto sendo reconhecido foi uma
          grande motivação para continuar evoluindo como desenvolvedor e profissional da área de tecnologia.
        </p>
        <br />
        <p>
          E o melhor: essa conquista foi oficialmente certificada pela PUC Minas Virtual, o que me deixa ainda
          mais orgulhoso do resultado e do caminho que estou construindo.
        </p>
      </>
    ),
    badge: "Conquistas",
    image:
      Celeste,
  },
  {
    title: "Análise e desenvolvimento de sistemas",
    description: (
      <>
        <p>
          Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na PUC Minas.
          Estudar ADS tem sido uma experiência incrível,  o curso me desafia a pensar de forma lógica,
          criativa e prática ao mesmo tempo com projetos reais.
        </p>
        <br />
        <p>
          Tenho me dedicado bastante e fico feliz em dizer que venho conquistando boas notas ao longo do curso. Cada semestre tem
          sido uma oportunidade de aprender mais sobre tecnologia, programação e desenvolvimento de soluções reais.
        </p>
        <br />
        <p>
          Mais do que apenas uma formação, esse curso tem me ajudado a fortalecer minha paixão pela área e a enxergar o quanto posso contribuir
          para o futuro da tecnologia.
        </p>
      </>
    ),
    badge: "Escolaridade",
    image:
      Escola,
  },
];
