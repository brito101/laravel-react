import React from "react";
import { GlobalContext } from "./GlobalContext";

const Product = () => {
    const { products } = React.useContext(GlobalContext);
    if (products === null) return null;
    return (
        <div>
            Produtos:{" "}
            {products.map((product) => (
                <li key={product.id}>{product.nome}</li>
            ))}
        </div>
    );
};

export default Product;
