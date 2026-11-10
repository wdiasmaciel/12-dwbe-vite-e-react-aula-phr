import { useState, useEffect } from "react";
import "../../App.css";

function Exemplo({ voltar }) {
    const [valor, setValor] = useState(0);

    useEffect(() => {
        console.log("Valor: ", valor);
        setValor(valor => valor + 1);
        return () => {
            console.log("Componente desmontado.");
        }
    }, [valor]);

    return (
        <>
            <button className="botao" type="button" onClick={voltar}>
                Voltar para App
            </button>

            <h1>Sistema de Produtos</h1>

            <h2 class="carregados">Valor: {valor}</h2>

            <p>
                Entra em loop infinito, pois o valor é alterado dentro
                do useEffect e está na lista de dependências.
            </p>

            <p>
                O return do useEffect (função de limpeza ou cleanup)
                não é executado apenas quando o componente é desmontado.
            </p>
            <p>
                Ele também roda antes de o efeito ser executado novamente
                em re-renderizações (caso o array de dependências mude).
            </p>
            <P>
                O return do useEffect é executado em dois momentos:
                <ol>
                    <li>1. Ao desmontar o componente: é executado uma última vez para limpar recursos (como remover event listeners, cancelar requisições ou fechar conexões).</li>
                    <li>2. Antes de uma nova execução do efeito (re-renderização com dependências): se você passou dependências (ex: [id]), toda vez que o valor de id mudar, o React faz o seguinte antes de rodar a nova versão do efeito:
                        <ul>
                            <li>Executa a função de return da versão anterior.</li>
                            <li>Executa a nova função do useEffect.</li>
                        </ul>
                    </li>
                </ol>
            </p>
            <p>
                Resumo:
                <ul>
                    <li>Sem array de segundo argumento (useEffect(() => {... })): o return roda a cada renderização do componente, logo antes do próximo efeito.</li>
                    <li>Array vazio (useEffect(() => {... }, [])): o return só roda quando o componente é desmontado (já que o efeito principal só roda uma vez na montagem).</li>
                    <li>Com dependências (useEffect(() => {... }, [valor])): o return roda quando o valor muda (antes do efeito rodar novamente) e quando o componente é desmontado.</li>
                </ul>
            </p>
        </>
    );
}

export default Exemplo;
