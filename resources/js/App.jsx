import React from "react";
import Product from "./Product";
import { GlobalStorage } from "./GlobalContext";
import Clear from "./Clear";

const App = () => {
    return (
        <GlobalStorage>
            <Product />
            <Clear />
        </GlobalStorage>
    );
};

export default App;
