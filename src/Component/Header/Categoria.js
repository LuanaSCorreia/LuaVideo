import React, { useState } from 'react';
import ModalMenu from "./ModalMenu";
import styled from 'styled-components';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Series from "../Main/Series.js";
//import Filmes from "../Main/Filmes.js"


const Categoria = styled.div`
cursor: pointer;
color: white;
width: 100%;
height: 60vh;
position: absolute;
top:12vh;
left:0;
z-index: 10;
list-style: none;
background-color: #1a222e;
display: flex;
justify-content: space-evenly;

p{
position: relative;
left: 3vw;
font-weight: bold;
}
div{
    width: 60%;
}

.box_one{
width: 70%;
height: 40vh;
gap: 2vw ;
display: grid;
grid-template-columns: 1fr 1fr 1fr;

&::after{
content: ' ';
width: 0.1vw;
height: 22vw;
background-color: white;
position: relative;
top:-48vh;
left: 45vw;
}
}

.box_one_item{
    width: 10vw;
    height: 7vw;
    background-color: #1E90FF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 4%;
    &:hover{
        border: solid white; 
    }
}
`

const Genero = styled.div`
overflow-x:hidden;
width: 100px;
.box_two{
    width: 100%;
    height: 30vh;
    list-style: none;
    font-size: smaller;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:0.6vw;
    li{
        width: 16vw;
        &:hover{
            font-weight: bold;
        }
    }
}
.box_three{
    list-style: none;
    font-size: smaller;
    display: grid;
    gap:0.6vw;
    height: 20vh;
    width: 25vw;
    li{
        &:hover{
            font-weight: bold;
        }
    }
}
`
//                            <li class="box_one_item"><Link to = "/Filmes">Filmes</Link></li>

function Categorias() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <BrowserRouter>
        <div>
            <p onClick={() => setIsModalVisible(true)}>Categoria ▼</p>
            {isModalVisible ? (
                <ModalMenu onClose={() => setIsModalVisible(false)}>
                    <Categoria>
                        <div>
                        <p>Principais categorias</p>
                        <ul class="box_one">
                            <li class="box_one_item">incluido no prime</li>
                            <li class="box_one_item">Amazon originais e exclusivos</li>
                            <li class="box_one_item"><Link to = "/Series">Séries</Link></li>
                            <li class="box_one_item">Infantis</li>
                            <li class="box_one_item">Esporte</li>
                        </ul>
                        </div>
                  
                        <Genero>
                            <p>Gêneros</p>
                            <ul class="box_two">
                                <li>Ação e aventura</li>
                                <li>Comédia</li>
                                <li>Drama</li>
                                <li>Documentário</li>
                                <li>Conteúdo infantil e para toda a família</li>
                                <li>Fantasia</li>
                                <li>Terror</li>
                                <li>Romance</li>
                                <li>Ficção científica</li>
                                <li>Suspense</li>
                                <li>Anime</li>
                                <li>Militar e guerra</li>
                                <li>Policial</li>
                            </ul>

                            <p>Outras categorias</p>
                            <ul class='box_three'>
                                <li>Filmes adicionados recentemente</li>
                                <li>Séries adicionadas recentemente</li>
                                <li>Premiados</li>
                                <li>Whatch party</li>
                                <li>Por tempo ilimitado no Prime</li>
                            </ul>
                        </Genero>
                    </Categoria>
                </ModalMenu>
            ) : null}
        </div>
        <Routes>
          <Route path="/Filmes" element={<Filmes />} />
          <Route path="/Series" element={<Series />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Categorias;