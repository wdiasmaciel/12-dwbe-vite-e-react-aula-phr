import { useState, useEffect } from "react";
import "../../App.css";

function Exemplo({ voltar }) {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSegundos(valor => valor + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h1>Exemplo 07</h1>

            <h1>Sistema de Produtos</h1>

            <h2 className="carregados">Segundos: {segundos}</h2>

            <p>
                O `return` dentro do `useEffect()` não renderiza JSX.
            </p>
            <p>
                Ele define uma função de limpeza (*cleanup*).
            </p>
            <p>
                Sempre que o componente for removido da tela, o temporizador será encerrado.
            </p>
            <p>
                Esse procedimento evita vazamentos de memória (memory leaks).
            </p>
        </>
    );

}

export default Exemplo;
