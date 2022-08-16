import React, {Component} from 'react';
import styled from 'styled-components'
import Ppgirls from '../imagem/girls.webp';
import House from '../imagem/house.webp';
import Chris from '../imagem/chris.webp';
import DeFerias from '../imagem/deferias.webp';
import Modern from '../imagem/modernlove.webp';
import Office from '../imagem/theoffice.webp';


const Container = styled.section`
width: 99.8vw;
figure{
    height: 70vh;
    display: flex;

    height: 60vh;
    margin: 0;
    overflow: hidden;
}

.paperGirls img{
    width: 100%;
    height: 100%;
}
`
const Assistindo = styled.section`
  color: #fdffde;
  background-color: #1a222e;
  width: 99.8vw;
  border: solid #1a222e;
  h2{
    font-size: 1.5vw;
    padding: 1vw;
    width: fit-content;
}
ul{ 
    list-style: none;
    height:14vw;
    width: 100%;
    display: flex;
    overflow-y: hidden;
    gap: 1vw;
    max-inline-size: 95vw;
}
li{
    width: 150%;
    height: 100%;
    &:hover{
    border: solid white;
    }
}
`

export default class Main extends Component{
    render(){
    return (
     <Container>
     <figure>
         <img src={Ppgirls}/>
     </figure>
     <Assistindo>
    <h2> Continuar assistindo</h2>
    <ul class="series">
        <li> <img src={House} alt=""/></li>
        <li> <img src={Chris}alt=""/></li>
        <li> <img src={Office} alt=""/></li>
        <li> <img src={DeFerias} alt=""/></li>
        <li> <img src={Modern} alt=""/></li>
    
    </ul>
</Assistindo>
     </Container>
    )}}
    