import React from "react";
import Button from "./components/Button";
import Product from "./components/Product";
const App = () => {
    const products = ["tablet", "smartphone", "notebook"];
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(null);
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        let product = localStorage.getItem("product");

        async function getProduct() {
            const response = await fetch(
                `https://ranekapi.origamid.dev/json/api/produto/${product}`
            );
            const json = await response.json();
            setData(json);
        }

        if (product && product !== null) {
            getProduct();
            setProduct(product);
        }
    }, []);

    return (
        <div>
            {product && <h1>Preference: {product}</h1>}
            {products.map((p) => {
                return (
                    <Button
                        key={p}
                        text={p}
                        setData={setData}
                        setLoading={setLoading}
                        setProduct={setProduct}
                    />
                );
            })}
            {loading && <p>Loading...</p>}
            {!loading && data && <Product data={data} />}
        </div>
    );
};

export default App;
