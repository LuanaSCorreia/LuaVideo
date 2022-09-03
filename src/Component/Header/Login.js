import React, { useState } from 'react';
import ModalMenu from "./ModalMenu";
import styled from 'styled-components';
import IPerfil from "../imagem/perfil.jpg";

const ImgPerfil = styled.img`
width: 3vw;
border-radius: 50%;
`
const Pperfil = styled.div`
width: 10%;
display: flex;
align-items: center;
justify-content: space-around;
cursor: pointer;
`
const Ul = styled.ul`
color:white;
position: relative;
top:8.8vh;
left:67vw;
cursor: pointer;
list-style: none;
background-color: #1a222e;
width: 30vw;
height: 13vw;
display: grid;
grid-template-columns: 1fr 1fr;
gap:0.4vw;
font-size: smaller;

li{
        &:hover{
            font-weight: bold;
        }
    }
`
function Perfil() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    return (
        <> 
        <Pperfil onClick={() => setIsModalVisible(true)}>
                <ImgPerfil src={IPerfil} alt="" />
                <figcaption>Luana...▼</figcaption>
            </Pperfil>
            
        { isModalVisible ? (
            <ModalMenu onClose={() => setIsModalVisible(false)}>
            <Ul>
           <li> Conta e configuração</li>
           <li>Crianças</li>
           <li>Benefícios Prime</li>
           <li>Adicionar novo perfil</li>
           <li>Assista onde quiser</li>
           <li>Editar perfis</li>
           <li>Ajuda</li>
           <li>Saiba mais</li>
           <li>Não é Luana? Sair</li>
           </Ul>
           </ModalMenu>
            ):null}
        </>
    )
}

export default Perfil