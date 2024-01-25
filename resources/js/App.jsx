import React from "react";
import Radio from "./Form/Radio";

const questions = [
    {
        question: "Qual método é utilizado para criar componentes?",
        options: [
            "React.makeComponent()",
            "React.createComponent()",
            "React.createElement()",
        ],
        answer: "React.createElement()",
        id: "p1",
    },
    {
        question: "Como importamos um componente externo?",
        options: [
            'import Component from "./Component"',
            'require("./Component")',
            'import "./Component"',
        ],
        answer: 'import Component from "./Component"',
        id: "p2",
    },
    {
        question: "Qual hook não é nativo?",
        options: ["useEffect()", "useFetch()", "useCallback()"],
        answer: "useFetch()",
        id: "p3",
    },
    {
        question: "Qual palavra deve ser utilizada para criarmos um hook?",
        options: ["set", "get", "use"],
        answer: "use",
        id: "p4",
    },
];

const App = () => {
    const [answers, setAnswers] = React.useState({
        p1: "",
        p2: "",
        p3: "",
        p4: "",
    });
    const [slide, setSlide] = React.useState(0);
    const [result, setResult] = React.useState(null);

    function handleChange({ target }) {
        setAnswers({ ...answers, [target.id]: target.value });
    }

    function finalResult() {
        const corrects = questions.filter(
            ({ id, answer }) => answers[id] === answer
        );
        setResult(`Você acertou: ${corrects.length} de ${questions.length}`);
    }

    function handleClick() {
        if (slide < questions.length - 1) {
            setSlide(slide + 1);
        } else {
            setSlide(slide + 1);
            finalResult();
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {questions.map((question, index) => (
                <Radio
                    active={slide === index}
                    key={index}
                    onChange={handleChange}
                    value={answers[question.id]}
                    {...question}
                />
            ))}

            {result ? (
                <p>{result}</p>
            ) : (
                <button onClick={handleClick}>Próxima</button>
            )}
        </form>
    );
};

export default App;
