import { useState } from 'react'

/*
 * Como existe um index.jsx em ./components/exemplo01/, 
 * o Vite resolve esse arquivo automaticamente. 
 * Assim, não é necessário informar index.jsx no import 
 * a seguir:
 */
import Exemplo01 from './components/exemplo01/'
import Exemplo02 from './components/exemplo02/'
import Exemplo03 from './components/exemplo03/'

import './App.css'

function App() {
  const [exemplo, setExemplo] = useState('inicio')

  if (exemplo === 'exemplo01') {
    return <Exemplo01 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo02') {
    return <Exemplo02 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo03') {
    return <Exemplo03 voltar={() => setExemplo('inicio')} />
  }

  return (
    <>
      <h1>Prática 11</h1>
      <div className="container">
        <button className="botao" type="button" onClick={() => setExemplo('exemplo01')}>
          Exemplo 01
        </button>
        <button className="botao" type="button" onClick={() => setExemplo('exemplo02')}>
          Exemplo 02
        </button>
        <button className="botao" type="button" onClick={() => setExemplo('exemplo03')}>
          Exemplo 03
        </button>
      </div>
    </>
  )
}

export default App