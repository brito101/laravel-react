import React from "react";

const Button = ({ text, setLoading, setData }) => {
    async function handleClick() {
        setLoading(true);

        const response = await fetch(
            `https://ranekapi.origamid.dev/json/api/produto/${text}`
        );

        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    return (
        <button onClick={handleClick} style={{ margin: ".5rem" }}>
            {text}
        </button>
    );
};

export default Button;
