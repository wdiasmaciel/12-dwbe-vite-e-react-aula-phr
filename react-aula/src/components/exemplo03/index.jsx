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
            
            <h1>{contador}</h1>
            
            <button
                onClick={() => setContador(contador + 1)}
            >
                Incrementar
            </button>
            <p>
                Sempre que o valor do contador for alterado,
                a mensagem aparecerá no console.
            </p>
        </>
    );

}

export default Exemplo;
