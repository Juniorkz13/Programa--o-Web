/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './CardCategoria.css'

export default ({ nome, imagem }) => (
    <div className="card">
        <h6>{nome}</h6>
        <img src={imagem} alt={nome} />
    </div>
)
