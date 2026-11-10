import { useState, useEffect } from "react";
import "../../App.css";

function Exemplo({ voltar }) {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("Contador alterado.");
        console.log("Novo valor:", contador);
    }, [contador]);

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
                somente quando o componente é criado (montado pela primeira vez).
            </p>
            <p>
                Para isso, utilizamos um vetor de dependências vazio.
            </p>
            <p>
                Isso indica ao React que o efeito será executado apenas uma vez.
            </p>
        </>
    );

}

export default Exemplo;




return (
    <div>
        <h1>{contador}</h1>
        <button
            onClick={() => setContador(contador + 1)}
        >
            Incrementar
        </button>
    </div>
);
}

