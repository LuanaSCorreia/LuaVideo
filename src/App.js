import React, { Component } from 'react';
import Header from "./Component/Header/Header.js";
import Main from "./Component/Main/Main.js"
import Footer from "./Component/Footer/Footer.js";
//import styled from 'styled-components'


export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>

    )
  }
}

/*import React, { Component } from 'react';
import Series from './axios';
import styled from 'styled-components';

const H1 = styled.h1`
font-size: 3vw;
text-decoration: underline;
margin-left: 4vw;
color: blue;
`

const Conteiner = styled.section`
div{
  border: solid blue;
  margin: 1vw;
}
ul{
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-around;
  list-style: none;
}

p{
  margin-left: 11vw;
}

img{
  width: 15vw;
}

`


class App extends Component{
state={
  movies:[]
}

componentDidMount(){
  this.getMovies()
}

getMovies = async () => {
  const resposta = await Series.get('')
  //console.log(resposta)

  const AllFilmes = resposta.data.results.map((item) => {
      return{
          ...item,
          nome:item.original_title,
          imagem: `https://image.tmdb.org/t/p/w500${item.poster_path}`, 
          back: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
      }
  })
  console.log(AllFilmes)
  this.setState({
      movies:AllFilmes
  })
  //console.log(this.state.movies)
}

  render() {
    return (
      <Conteiner>
        <H1> Série</H1>
        {this.state.movies.map((item) => (  
                        <div>
                        <ul>      
                            <li> <img src={item.imagem} title={item.title}/> </li>                 
                            <li>{item.name}</li>
                            <li>{item.overview}</li>
                            <p>{item.vote_average}</p>
                        </ul>
                        </div>
                    ))}
      </Conteiner>
      
    );
  }
}

export default App;*/
