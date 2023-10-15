import React from "react";
import Button from "./components/Button";
import Product from "./components/Product";

const App = () => {
    const products = ["tablet", "smartphone", "notebook", 'bola'];
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    return (
        <div>
            {products.map((p) => {
                return (
                    <Button
                        key={p}
                        text={p}
                        setData={setData}
                        setLoading={setLoading}
                    />
                );
            })}
            {loading && <p>Loading...</p>}
            {!loading && data && <Product data={data} />}
        </div>
    );
};

export default App;
