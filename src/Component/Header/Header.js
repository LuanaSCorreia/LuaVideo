import React, { Component } from 'react';
import styled from 'styled-components'
import Lupa from "../imagem/lupa.png";
import Prime from "../imagem/prime.png";
import Categorias from "./Categoria";
import Perfil from "./Login"


const Container = styled.section`
background-color: #1a222e;
color: #fdffde;
font-size: 1.3vw;
display: flex;
justify-content: space-evenly;
align-items: center;
position: fixed;
width: 100%;
height: 12vh;
margin: 0;
`
const Nav = styled.nav`
width: 30vw;
display: flex;
justify-content: space-evenly;
align-items: center;
list-style: none;
cursor: pointer;
`
const Buscar = styled.input`
width: 10vw;
height: 2vw;
background-color: #1a222e;
color: #fdffde;
font-size: 1.1vw;
position: relative;
background: url(${Lupa});
background-size:1.7vw;
background-repeat:no-repeat;
text-align: center;
`
const ImgPrime = styled.img`
width: 9vw;
`

const Span = styled.span`
width: 15%;
`

export default class Header extends Component {

    render() {
        return (
            <Container>
                <ImgPrime src={Prime} alt="Imagem prime vídeo" />
                <nav>
                    <Nav>
                        <li>Início</li>
                        <li>Loja</li>
                        <li>Canais</li>
                        <Categorias></Categorias>
                        <li>Minha área</li>
                        
                    </Nav>
                </nav>
                <Span></Span>
                <Buscar type="text" placeholder="Buscar" />
                <Perfil></Perfil>
            </Container>
        )
    }
}
