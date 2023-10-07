const Button = () => {
    function handleClick(e) {
        console.log(e.target);
    }

    return <button onClick={handleClick}>Clique</button>;
};

export default Button;
