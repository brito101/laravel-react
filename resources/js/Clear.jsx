import React from "react";
import { GlobalContext } from "./GlobalContext";

const Clear = () => {
    const { clearProdcuts } = React.useContext(GlobalContext);
    return <button onClick={clearProdcuts}>Limpar</button>;
};

export default Clear;
