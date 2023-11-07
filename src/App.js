import React, { useState } from 'react';
import ExpandableCard from './components/Modal1';

import './Style/App.scss';
import './Style/img.scss';

import Perfil from './img/perfil.jpg';
import css from './img/css.png';
import html from './img/html.png';
import sass from './img/sass.png';
import js from './img/js.png';
import net from './img/net.png';
import git from './img/git.png';
import mysql from './img/mysql.png';
import react from './img/react.png';
import csharp from './img/csharp.png';
import github from './img/github.svg';
import linkedin from './img/linkedin.svg';

function App() {
  return (
    <div className="App">

      <div class="container-main">
        <div class="div1">

          <div class="div5">
            <img src={Perfil} alt="perfil" />
          </div>

          <div class="div6">

            <p>
              Soy un apasionado desarrollador web con una mente creativa y un compromiso con la excelencia. Mi objetivo es convertir ideas en soluciones innovadoras y atractivas. ¡Bienvenido a mi mundo de desarrollo!
            </p>

          </div>

        </div>

        <div class="div2">
          <div className='div2-1'>1</div>
          <div className='div2-2'>2</div>
        </div>

        <div class="div3">
          <a href="https://www.linkedin.com/in/krepchuk-matias/" className='div3-1'>
            <img src={linkedin} alt="html logo" />
          </a>
          <a href="https://github.com/Mathiiuk" className='div3-1'>
            <img src={github} alt="github logo" />
          </a>
          <div className='div3-3'>algo</div>
        </div>

        <div class="div4">
          <div className='div4-1'>1</div>
          <div className='div4-2'>2</div>
          <div className='div4-3'>3</div>
          <div className='div4-4'>4</div>
        </div>

        <div className='div7'>

          <ExpandableCard className="div7-1"
            title="Proyecto 1"
            content="Content for PORTFOLIO card."
          />
          <ExpandableCard className="div7-2"
            title="Proyecto 2"
            content="Content for Card 2.asdfsadfsadfasdsfas"
          />
          <ExpandableCard className="div7-3"
            title="Proyecto 3"
            content="Content for Card 3."
          />
          <ExpandableCard className="div7-4"
            title="Proyecto 4"
            content="Content for Card 4."
          />

        </div>


        <div class="div8">
          <div class="image-row">
            <img src={html} alt="html" />
            <img src={sass} alt="sass" />
            <img src={js} alt="js" />
            <img src={css} alt="css" />
            <img src={net} alt="net" />
            <img src={csharp} alt="csharp" />
            <img src={git} alt="git" />
            <img src={mysql} alt="mysql" />
            <img src={react} alt="react" />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
