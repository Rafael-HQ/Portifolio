import React from "react"
import "./TextoPrincipalStyle.css"
import { FlipWords } from '../ComponentsEspeciais/FlipWords'


export function TextoPrincipal() {

    return (
        <main>
            
            <div className="content">
                <FlipWords data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    data-aos-duration="1500"
                    className="FlipWords"
                    words={["Bem-Vindo(a)", "Welcome", "欢迎", "ようこそ", "Bienvenue"]}
                />
                <p
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                >
                    Bem-vindo ao meu portfólio! Sou um desenvolvedor dedicado a <br /> transformar ideias
                    em realidade através da tecnologia.  Neste espaço, <br />compartilho minha trajetória,
                    competências em desenvolvimento, projetos significativos e como podemos
                    nos conectar para criar algo extraordinário.
                </p>

            </div>
        </main>
    )
}
