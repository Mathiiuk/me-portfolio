import React, { useState } from 'react';
import '../Style/App.scss';

function Modal1({ title, content }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="expandable-card">
      <div className="card-header" onClick={openModal}>
        {title}
      </div>
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal1;
