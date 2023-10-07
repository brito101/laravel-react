import React from "react";
import Title from "./Title";
import Product from "./Product";

const Products = () => {
    const products = [
        { name: "Notebook", properties: ["16gb ram", "512gb"] },
        { name: "Smartphone", properties: ["2gb ram", "128gb"] },
    ];

    return (
        <section>
            <Title text="Produtos" />
            {products.map((product) => (
                <Product key={product.name} {...product} />
            ))}
        </section>
    );
};

export default Products;
