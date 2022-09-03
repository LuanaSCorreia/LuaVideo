import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios";
import Estrela from "../imagem/Estrela.png"

const H1 = styled.h1`
font-size: 3vw;
text-decoration: underline;
margin-left: 4vw;
color: #CD6839;
`

const Conteiner = styled.section`

`

const Box_one = styled.div`
width: 100%;
display: flex;

ul{width: 99vw;
 height: 46vh;
  display: flex;
  list-style: none;
  overflow:auto;
  object-fit: cover;
}

img{
  width: 92vw;
}

`
const Box_two = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;

ul{
  width: 28vw;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  font-size: 1vw;
  height: 82vh;
}
li{
  display: grid;
  place-items: center;
}
`
const Poster = styled.img`
  width:50%;
`
const Title = styled.li`
font-weight: bold;
font-size: 1.2vw;
`
const Nota = styled.img`
width: 2vw;
`

const SeriesApi = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/tv/popular?api_key=b8e8a17e0fc5181b8d780d64b08c7782&language=pt-BR&page=1'
});

console.log(SeriesApi);

class Series extends Component {

  state = {
    series: [],
    FilterSeries: []
  };

  componentDidMount() {
    this.getSeries();
  }

  getSeries = async () => {
    const resposta = await SeriesApi.get();
    console.log(resposta);
    const allSeries = resposta.data.results.map((item) => {
      return {
        ...item,
        image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
      };
    });
    this.setState({
      series: allSeries,
      FilterSeries: allSeries
    });
    console.log(allSeries);
  };

  /*handleChange = (event) => {
    const ListaFiltrada = this.state.series.filter((item) => {
      if (
        item.original_name
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      ) {
        return true;
      } else{
        return false;
      }
    });
    this.setState({
      FilterSeries: ListaFiltrada,
      series: ListaFiltrada
    });
    //console.log(this.state.FilterMovies);
  }; <Buscador>
          <input onChange={this.handleChange} placeholder= "buscar" type="text"/>
</Buscador>
  
  */

  render() {
    return (
      <Conteiner>
        <Box_one>
        {this.state.series.map((item, index) => (
          <div key={index}>
            <ul>
              <li> <img src={item.backdrop} /></li>
            </ul>
          </div>
        ))}
       </Box_one>
        <H1> Série</H1>
        <Box_two>
        {this.state.series.map((item, index) => (
          <div key={index}>
            <ul>
              <li> <Poster src={item.image} title={item.title} /> </li>
              <Title>{item.name}</Title>
              <li>{item.overview}</li>
              <li><Nota src ={Estrela} />{item.vote_average}</li>
            </ul>
          </div>
        ))}
       </Box_two>
      </Conteiner>
    );
  }
}

export default Series;
