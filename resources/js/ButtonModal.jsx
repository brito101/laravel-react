import React from "react";

const ButtonModal = ({ setModal }) => {
    function handleClick() {
        setModal((modal) => !modal);
    }

    return <button onClick={handleClick}>Open</button>;
};

export default ButtonModal;
