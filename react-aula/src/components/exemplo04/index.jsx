import { useState, useEffect } from "react";
import "../../App.css";

function Exemplo({ voltar }) {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        setProdutos([
            {
                id: 1,
                nome: "Notebook",
                preco: 4200
            },
            {
                id: 2,
                nome: "Mouse",
                preco: 180
            }
        ]);

    }, []);

    return (
        <>
            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h1>Exemplo 04</h1>

            <h1>Sistema de Produtos</h1>

            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>
                        <strong>{produto.nome}</strong> - R$ {produto.preco.toFixed(2)}
                    </li>
                ))}
            </ul>

            <p>
                Sempre que o componente for renderizado (montado),
                a lista de produtos será carregada e exibida na tela.
            </p>
        </>
    );

}

export default Exemplo;
