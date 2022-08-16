import React from "react";
import styled from 'styled-components';

const Caixa = styled.div`
`
/*const Close = styled.button`
background-color: transparent;
border: none;
width: 5vw;
height: 5vw;
position: relative;
right:29vw;
display: flex;
align-items: center;

&::before{
content: ' ';
position: absolute;
width: 0.2vw;
height: 1.1vw;
background-color: white;
transform: rotate(45deg);
}

&::after{
content: ' ';
position: absolute;
width: 0.2vw;
height: 1.1vw;
background-color: white;
transform: rotate(-45deg);
z-index: auto;
}
`
<Close onClick={onClose}></Close>
*/
const Conteudo = styled.div`
`
const Div = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;
`
const ModalMenu = ({ id = 'modal', onClose = () => { }, children }) => {
    const clickFora = (e) => {
        if (e.target.id === id) onClose();
    };

    return (
        <Div id={id} onClick={clickFora}>
            <Caixa>
                <Conteudo>{children}</Conteudo>
            </Caixa>
        </Div>
    );
};

export default ModalMenu;