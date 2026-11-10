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

            <h2 class="carregados">Nome: {nome}</h2>
            <h2 class="carregados">Preço: {preco}</h2>
            <h2 class="carregados">Estoque: {estoque}</h2>

        </>
    );

}

export default Exemplo;
