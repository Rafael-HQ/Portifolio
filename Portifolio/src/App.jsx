import { useEffect } from 'react';
import { TextoPrincipal } from "../src/Components/MainText/TextoPrincipal";
import { Terra } from "../src/Components/TerraSpline/Terra";
import { Linguagens } from "../src/Components/Skills/Linguagens";
import {TracingBeamDemo} from './Components/ComponentsEspeciais/Tracing/TracingBeamDemo'
import {CardHoverEffectDemo} from "./Components/ComponentsEspeciais/Projects/CardHoverEffectDemo"
import {ContactForm} from './Components/SendMenssage/ContactForm'
import ImgIcon from "../assets/icons8-code-64.png"
import Aos from 'aos';
import 'aos/dist/aos.css'
import './App.css';

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div className='headerContainer'>
      <header>
        <img data-aos="fade-down" data-aos-duration="1500" src={ImgIcon} alt="Logo" />
        <nav>
          <a data-aos="fade-down" data-aos-duration="1500" href="#tecnologias">Tecnologias</a>
          <a data-aos="fade-down" data-aos-duration="2000" href="#sobreMim">Sobre mim</a>
          <a data-aos="fade-down" data-aos-duration="2500" href="#projetos">Projetos</a>
          <a data-aos="fade-down" data-aos-duration="3000" href="#contato">Contate-me</a>
        </nav>
      </header>

      <section className="main-section">
        <TextoPrincipal />
        <Terra />
      </section>
      <section id='tecnologias'>
      <Linguagens />
      </section>
      <section id='sobreMim' className='tracing'>
       <TracingBeamDemo />
      </section>
      <section id='projetos'>
      <CardHoverEffectDemo />
      </section>
      <section id='contato'>
      <ContactForm />
      </section>
    </div>
  );
}

export default App;