import { useState, useEffect } from "react";

const lista = [
    {
        id: 1,
        nome: "Notebook",
        preco: 4200
    },
    {
        id: 2,
        nome: "Monitor",
        preco: 1200
    },
    {
        id: 3,
        nome: "Mouse Gamer",
        preco: 180
    }
];

function Exemplo({ voltar}) {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);


    useEffect(() => {
        setProdutos(lista);
        setCarregando(false);
    }, []);

    return (
        <>
            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h1>Sistema de Produtos</h1>

            {carregando ? <h2 className="carregando">Carregando...</h2> : <h2 className="carregados">Produtos carregados.</h2>}

            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>
                        <strong>{produto.nome}</strong> - R$ {produto.preco.toFixed(2)}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Exemplo;