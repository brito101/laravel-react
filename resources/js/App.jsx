import React from "react";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";

const App = () => {
    const { pathname } = window.location;

    let Page;
    if (pathname === "/produtos") {
        Page = Products;
    } else {
        Page = Home;
    }

    return (
        <section>
            <Header />
            <Page />
        </section>
    );
};

export default App;
