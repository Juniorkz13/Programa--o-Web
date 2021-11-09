/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import logo from '../img/logo.png'
import './Header.css'

export default () => (
    <header>
        <img src={logo} alt="Logo" />
        <h1>Loja Virtual</h1>
    </header>
)
