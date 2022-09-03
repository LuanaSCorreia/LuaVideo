import React, {Component} from 'react';
import styled from 'styled-components';
import Series from './Series';

const Container = styled.section``
/*width: 99.8vw;
figure{
    height: 70vh;
    display: flex;
    width: 100%;
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
  width: 99%;
  border: solid #1a222e;
 h2{
    font-size: 1.5vw;
    padding: 1vw;
    width: fit-content;
}
ul{ 
    list-style: none;
    height:14vw;
    display: flex;
    overflow-y: hidden;
    gap: 1vw;
    
}
li{
    height: 100%;
    &:hover{
    border: solid white;
    }
    img{
        width: 24vw;
    }
}
`*/

export default class Main extends Component{


    render(){
    return (
     <Container>
       <Series/>
     </Container>
    )
}
}
