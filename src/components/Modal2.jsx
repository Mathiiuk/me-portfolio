// modal.jsx
import React from 'react';
import '../Style/Modal.scss';
import '../Style/App.scss';

function Modal({ isOpen, onClose }) {
    return (
        <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
            <div className="modal-content">
                <div className="modal-container">
                    <div>
                        <h2>PROYECTO 2</h2>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates magnam velit ipsam natus illum, necessitatibus, deserunt inventore aut animi aperiam architecto. Fuga exercitationem doloribus sit perferendis consequuntur dolore quasi molestias
                        </p>
                    </div>
                </div>
            </div>
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
}

export default Modal;
