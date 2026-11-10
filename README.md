# 12-dwbe-vite-e-react-aula-phr

Material:

https://app.notion.com/p/Cap-tulo-9-Hooks-Avan-ados-com-useEffect-e-Ciclo-de-Vida-dos-Componentes-39644ced362580f19c58e91fa5db058c

---

## Comandos

```bash
sudo apt update
```

```bash
sudo apt install -y nodejs
```

```bash
node -v
```

```bash
npm install -g npm@11.19.0
```

```bash
npm -v
```

```bash
npm create vite@latest
```

Ao apresentar a mensagem abaixo, pressione a tecla `y`:

```text
Need to install the following packages:
create-vite@9.3.4
Ok to proceed? (y) 
```

Em seguida, informe o nome do projeto. Exemplo:

```text
react-aula
```

Depois, selecione o framework:

```text 
React
```

Na sequência, selecione a linguagem de programação:

```text
JavaScript
```

Na pergunta seguinte, selecione o linter:

```text
ESLint
```
Na pergunta abaixo, pressione a tecla `<ENTER>`, confirmando o `Yes` para a instalação:

```text
◆  Install with npm and start now?
│  ● Yes / ○ No
```

Depois da instalação, entre na pasta do projeto:

```bash
cd react-aula
```

```bash
npm install
```

```bash
npm run dev
```

```bash
git add . && git commit -m "Exemplo" && git push
```

---

# Exercícios 

1. Explique, com suas palavras, o que são **efeitos colaterais** em uma aplicação React.

2. Qual é a diferença entre utilizar `useEffect()` com e sem o vetor de dependências?

3. Desenvolva um componente que exiba a data e a hora atualizadas a cada segundo utilizando `setInterval()` e `useEffect()`.

4. Crie um componente que simule o carregamento de uma lista de clientes, exibindo a mensagem **"Carregando..."** por três segundos antes de mostrar os dados.

5. Implemente um cronômetro com botões **Iniciar**, **Pausar** e **Reiniciar**, utilizando `useState()` e `useEffect()`.

6. Pesquise o conceito de **memory leak** e explique por que a função de limpeza (*cleanup*) do `useEffect()` é importante.

7. Como desafio, adapte o Sistema de Gerenciamento de Produtos para buscar os dados de um arquivo JSON local utilizando `fetch()`. Esse exercício servirá como preparação para o próximo capítulo.
