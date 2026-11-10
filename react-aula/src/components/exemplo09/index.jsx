import { useState, useEffect } from "react";
import "../../App.css";

function Exemplo({ voltar }) {
    const [valor, setValor] = useState(0);

    useEffect(() => {
        console.log("Valor: ", valor);
        setValor(valor => valor + 1);
        return () => {
            console.log("Componente desmontado.");
        }
    }, [valor]);

    return (
        <>
            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h1>Sistema de Produtos</h1>

            <h2 class="carregados">Valor: {valor}</h2>

            <p>
                Entra em loop infinito, pois o valor é alterado dentro
                do useEffect e está na lista de dependências.
            </p>
        </>
    );

}

export default Exemplo;
