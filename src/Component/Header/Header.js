import React, { Component } from 'react';
import styled from 'styled-components'
import Lua from "../imagem/Lua.png";
import Categorias from "./Categoria";
import Perfil from "./Login";
import Lupa from "../imagem/lupa.png";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home.js"
//import Buscador from "../Main/Series"


const Container = styled.section`
background-color: #CD6839;
color: black;
font-size: 1.3vw;
display: flex;
justify-content: space-evenly;
align-items: center;
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

const ImgLua = styled.img`
width: 3.3vw;

`

const Span = styled.span`
width: 15%;
`
const Buscador = styled.input`
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
export default class Header extends Component {
  
    render() {
        return (
            <BrowserRouter>
            <Container>
                <figure>
                    <ImgLua src={Lua} alt="Lua" />
                    <figcaption>Video</figcaption>
                </figure>

                <Nav>
                    <li><Link to = "/">Inicio</Link></li>
                    <li>Loja</li>
                    <li>Canais</li>
                    <Categorias></Categorias>
                    <li>Minha área</li>
                </Nav>
        
                <Span></Span>

                <Buscador type= "text" placeholder = "Buscar"/>

                <Perfil></Perfil>
            </Container>
            <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
            </BrowserRouter>
        )
    }
}
