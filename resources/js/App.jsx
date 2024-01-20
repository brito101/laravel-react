import React from "react";

const App = () => {
    // const [name, setName] = React.useState("");
    // const [email, setEmail] = React.useState("");
    const [form, setForm] = React.useState({
        name: "",
        email: "",
    });

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form.name, form.email);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
            />
            <label htmlFor="email">E-mail</label>
            <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
            />
            <button>Enviar</button>
        </form>
    );
};

export default App;
