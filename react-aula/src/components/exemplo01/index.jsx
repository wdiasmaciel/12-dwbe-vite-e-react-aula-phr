import { useEffect } from "react";
import "../../App.css";

function Exemplo({ voltar }) {

    useEffect(() => {
        console.log("Componente carregado.");
    });

    return (
        <>
            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>
            <h1>Sistema de Produtos</h1>
            <p>Sempre que o componente for renderizado (montado),
                a mensagem aparecerá no console.
            </p>
            <p>
                Como o vetor de dependências não foi informado,
                a mensagem aparecerá no console sempre que o
                componente for renderizado (montado).
            </p>
            <p>
                Em main.jsx, o app está dentro de &lt;StrictMode&gt;. 
                No modo de desenvolvimento, o React executa os 
                efeitos duas vezes ao montar o componente, para 
                ajudar a detectar efeitos colaterais.
            </p>
        </>
    );

}

export default Exemplo;