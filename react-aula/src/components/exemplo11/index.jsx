import { useState, useEffect } from "react";

function Exemplo({ voltar }) {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const fetchProdutos = async () => {
        setCarregando(true);

        try {
            const response = await fetch('./produtos.json');
            const data = await response.json();
            setProdutos(data.produtos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        // Simulando uma chamada API:
        fetchProdutos();
    }, []);

    return (
        <>
            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h1>Sistema de Produtos</h1>

            {carregando ? <h2 class="carregando">Carregando...</h2> : <h2 class="carregados">Produtos carregados.</h2>}

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