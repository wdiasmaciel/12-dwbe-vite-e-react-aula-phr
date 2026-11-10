import { useState } from 'react'

/*
 * Como existe um index.jsx dentro de cada exeplo (./components/exemplo0#/), 
 * o Vite resolve esse arquivo automaticamente. 
 * Assim, não é necessário informar index.jsx nos imports a seguir:
 */
import Exemplo01 from './components/exemplo01/'
import Exemplo02 from './components/exemplo02/'
import Exemplo03 from './components/exemplo03/'
import Exemplo04 from './components/exemplo04/'
import Exemplo05 from './components/exemplo05/'
import Exemplo06 from './components/exemplo06/'
import Exemplo07 from './components/exemplo07/'
import Exemplo08 from './components/exemplo08/'
import Exemplo09 from './components/exemplo09/'
import Exemplo10 from './components/exemplo10/'

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

  if (exemplo === 'exemplo04') {
    return <Exemplo04 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo05') {
    return <Exemplo05 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo06') {
    return <Exemplo06 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo07') {
    return <Exemplo07 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo08') {
    return <Exemplo08 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo09') {
    return <Exemplo09 voltar={() => setExemplo('inicio')} />
  }

  if (exemplo === 'exemplo10') {
    return <Exemplo10 voltar={() => setExemplo('inicio')} />
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
        <button className="botao" type="button" onClick={() => setExemplo('exemplo04')}>
          Exemplo 04
        </button>
        <button className="botao" type="button" onClick={() => setExemplo('exemplo05')}>
          Exemplo 05
        </button>
        <button className="botao" type="button" onClick={() => setExemplo('exemplo06')}>
          Exemplo 06
        </button>
        <button className="botao" type="button" onClick={() => setExemplo('exemplo07')}>
          Exemplo 07
        </button>
        <button className="botao" type="button" onClick={() => setExemplo('exemplo08')}>
          Exemplo 08
        </button>
        <button className="botao" type="button" onClick={() => setExemplo('exemplo09')}>
          Exemplo 09
        </button>
        <button className="botao" type="button" onClick={() => setExemplo('exemplo10')}>
          Exemplo 10
        </button>
      </div>
    </>
  )
}

export default App