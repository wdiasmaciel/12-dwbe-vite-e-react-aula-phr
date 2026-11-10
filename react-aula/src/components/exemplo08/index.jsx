import { useState, useEffect } from "react";
import "../../App.css";

function Exemplo({ voltar }) {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);
    const [estoque, setEstoque] = useState(0);

    useEffect(() => {
        console.log("Alteração.");
    }, [nome, preco, estoque]);

    return (
        <>
            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h1>Exemplo 08</h1>

            <h1>Sistema de Produtos</h1>

            <input
                type="text"
                placeholder="Nome do produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <input
                type="number"
                placeholder="Preço do produto"
                value={preco}
                onChange={(e) => setPreco(parseFloat(e.target.value))}
            />

            <input
                type="number"
                placeholder="Estoque do produto"
                value={estoque}
                onChange={(e) => setEstoque(parseInt(e.target.value))}
            />

            <p>
                Sempre que o valor de qualquer campo for alterado,
                a mensagem aparecerá no console.
            </p>

            <h2 className="carregados">Nome: {nome}</h2>
            <h2 className="carregados">Preço: {preco}</h2>
            <h2 className="carregados">Estoque: {estoque}</h2>

            <p>
                Também podemos observar diversas variáveis.
            </p>

            <p>
                Sempre que uma delas mudar: o efeito será executado.
            </p>
        </>
    );

}

export default Exemplo;
