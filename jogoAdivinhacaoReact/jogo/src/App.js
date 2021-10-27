/* eslint-disable import/no-anonymous-default-export */
import React, { useRef } from 'react'
import Titulo from './componentes/Titulo'
import Descricao from './componentes/Descricao'

export default () => {
    let numTentativas = 0
    const textoInput = useRef()

    const conferirPalpite = () => {
        const valor = textoInput.current.value
        textoInput.current.value = null
        alert('Clique funcionou!' + valor)
    }
    return (
        <>
            <Titulo tentativa={numTentativas} />
            <Descricao />
            <label>Digite um palpite:</label>
            <input ref={textoInput} type="number" min={1} max={100} />
            <button onClick={conferirPalpite}>Enviar palpite</button>
            <div>
                <p class="palpites">Palpites anteriores:</p>
                <p class="ultimoResultado"></p>
                <p class="baixoOuAlto"></p>
            </div>
        </>
    )
}
