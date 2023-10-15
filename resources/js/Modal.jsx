import React from "react";

const Modal = ({ modal, setModal }) => {
    if (modal === true) {
        return (
            <div>
                Modal <button onClick={() => setModal(false)}>Close</button>
            </div>
        );
    } else {
        return null;
    }
};

export default Modal;
