import { useState, useEffect } from "react";
import "../../App.css";

function Exemplo({ voltar }) {

    useEffect(() => {
        setTimeout(() => {
            console.log("Dados carregados.");
        }, 3000);
    }, []);

    return (
        <>
            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h1>Exemplo 05</h1>

            <h1>Sistema de Produtos</h1>

            <p>
                Sempre que o componente for renderizado (montado),
                a mensagem aparecerá no console após 3 segundos.
            </p>
        </>
    );

}

export default Exemplo;
