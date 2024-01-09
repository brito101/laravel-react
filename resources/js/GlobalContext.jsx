import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [products, setProducts] = React.useState(null);

    React.useEffect(() => {
        fetch("https://ranekapi.origamid.dev/json/api/produto/")
            .then((response) => response.json())
            .then((json) => setProducts(json));
    }, []);

    function clearProdcuts() {
        setProducts(null);
    }

    return (
        <GlobalContext.Provider value={{ products, clearProdcuts }}>
            {children}
        </GlobalContext.Provider>
    );
};
