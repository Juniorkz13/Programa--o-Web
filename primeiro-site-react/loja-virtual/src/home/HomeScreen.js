/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Header from './Header'
import TextoIntrodutorio from './TextoIntrodutorio'
import CardCategoria from './CardCategoria'
import android from '../img/android.png'
import apple from '../img/apple.png'
import windows from '../img/windows.png'
import playstation from '../img/playstation.png'
import Footer from './Footer'
import './HomeScreen.css'

const categorias = [
    {
        id: 1,
        nome: 'Android',
        imagem: android
    },
    {
        id: 2,
        nome: 'Apple',
        imagem: apple
    },
    {
        id: 3,
        nome: 'Windows',
        imagem: windows
    },
    {
        id: 4,
        nome: 'Playstation',
        imagem: playstation
    }
]

export default () => {
    return (
        <>
            <Header />
            <section>
                <TextoIntrodutorio />
                <aside>
                    {categorias.map((categoria) => (
                        <CardCategoria
                            key={categoria.id}
                            nome={categoria.nome}
                            imagem={categoria.imagem}
                        />
                    ))}
                </aside>
            </section>
            <Footer />
        </>
    )
}
