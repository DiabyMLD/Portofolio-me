import React from "react";
import "./Modal.css";

type ModalProps = {
  imageSrc: string;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ imageSrc, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <img src={imageSrc} alt="Image en grand" />
      </div>
    </div>
  );
};
