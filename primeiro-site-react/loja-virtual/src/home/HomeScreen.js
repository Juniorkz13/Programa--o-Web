/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Header from './Header'
import TextoIntrodutorio from './TextoIntrodutorio'
import CardCategoria from './CardCategoria'
import Footer from './Footer'

export default () => {
    return (
        <>
            <Header />
            <section>
                <TextoIntrodutorio />
                <aside>
                    <CardCategoria />
                    <CardCategoria />
                    <CardCategoria />
                    <CardCategoria />
                </aside>
            </section>
            <Footer />
        </>
    )
}
