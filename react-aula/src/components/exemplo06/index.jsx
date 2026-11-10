import { useState, useEffect } from "react";
import "../../App.css";

function Exemplo({ voltar }) {
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setCarregando(false);
        }, 3000);
    }, []);

    return (
        <>
            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h1>Sistema de Produtos</h1>

            {carregando ? <h2 className="carregando">Carregando...</h2> : <h2 className="carregados">Produtos carregados.</h2>}
        </>
    );

}

export default Exemplo;
