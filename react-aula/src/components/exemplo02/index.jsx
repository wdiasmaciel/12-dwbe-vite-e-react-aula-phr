import { useEffect } from "react";
import "../../App.css";

function Exemplo({ voltar }) {

    useEffect(() => {
        console.log("Aplicação iniciada.");
    }, []);

    return (
        <>
            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>
            <h1>Sistema de Produtos</h1>
            <p>
                Sempre que o componente for renderizado (montado),
                a mensagem aparecerá no console.
            </p>
            <p>
                Na maioria das aplicações, desejamos executar uma ação
                somente quando o componente é criado.
            </p>
            <p>
                Para isso utilizamos um vetor de dependências vazio.
            </p>
        </>
    );

}

export default Exemplo;