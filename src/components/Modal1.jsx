// modal.jsx
import React from 'react';
import '../Style/Modal.scss';
import '../Style/App.scss';

function Modal({ isOpen, onClose }) {
    return (
        <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
            <div className="modal-container">
                <div>
                    <h2>Mi Portafolio</h2>
                </div>
                <div>
                    <h3>Creación del Portafolio</h3>
                    <p>
                        Mi portafolio es un reflejo de mi trayectoria y habilidades en el mundo de la tecnología y el desarrollo web. Lo construí con mucho entusiasmo y dedicación para destacar mis logros y proyectos más significativos.
                    </p>
                    <h3>Tecnologías Utilizadas</h3>
                    <p>
                        Durante la creación de mi portafolio, utilicé una variedad de tecnologías para garantizar un diseño atractivo y una experiencia de usuario fluida. Algunas de las tecnologías clave que empleé incluyen HTML, CSS, JavaScript y Bootstrap para la maquetación y el diseño. Además, utilicé un servidor Node.js para alojar mi portafolio en línea y lo desplegué en un servicio de alojamiento web confiable.
                    </p>
                    <p>
                        También utilicé Git para el control de versiones y GitHub Pages para la publicación del sitio web, lo que me permitió mantener un registro de mis cambios y compartir mi portafolio de manera efectiva.
                    </p>
                    <p>
                        En cuanto a la implementación de animaciones y efectos interactivos, empleé bibliotecas como jQuery y CSS transitions para darle vida a mi portafolio y hacer que se destacara.
                    </p>
                    <p>
                        En resumen, mi portafolio representa no solo mi experiencia y logros, sino también mis habilidades en el desarrollo web y mi capacidad para utilizar diversas tecnologías para crear proyectos atractivos y funcionales.
                    </p>
                </div>
            </div>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
}

export default Modal;
