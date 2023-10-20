import './Style/App.scss';
import './Style/img.scss';

import Perfil from './img/perfil.jpg';
import css from './img/css.png';
import html from './img/html.png';
import sass from './img/sass.png';
import js from './img/js.png';


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
          2
        </div>

        <div class="div4">
          4
        </div>
        <div class="div7">
          7
        </div>

        <div class="div8">
          <h3>Technology</h3>
          <div class="image-row">
            <img src={html} alt="html" />
            <img src={sass} alt="sass" />
            <img src={js} alt="js" />
            <img src={css} alt="css" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
