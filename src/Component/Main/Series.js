import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios";
import Estrela from "../imagem/Estrela.png";
import Carousel from "nuka-carousel/lib/carousel";

const H1 = styled.h1`
font-size: 3vw;
text-decoration: underline;
margin-left: 4vw;
color: #8470ff;
`

const Conteiner = styled.section`

`

const Box_two = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;


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
const Box = styled(Carousel)`
width: 70%;
height: 30px;
margin-top: 5vh;

figure{
  height: 50vh;
}
  img{
  width: 100%;
  height: 100%;
  border: solid;
  object-fit: cover;
  border: solid;
}
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
    const settings = {
      dots: true,
      wrapAround: true,
      pauseOnHover: true,
      autoplay: true,
      slidesToShow: 1,
      speed: 900,
      cellAlign: "center",
      cellSpacing: 50,
      slidesToScroll: 1,
      dragThreshold: 1,
      adaptiveWidth: true,
      enableKeyboardControls: true,
  
      defaultControlsConfig: {
        nextButtonText: ">",
        prevButtonText: "<",
        
        pagingDotsStyle: {
          fill: "red",
          position:"relative",
          top:"5vh",
        },
        nextButtonStyle: {
          backgroundColor: "#f00",
          position:"relative",
          top:"5vh",
        },
        prevButtonStyle: {
          color: "white",
          backgroundColor: "#f00",
          position:"relative",
          top:"5vh",
        }
      }
    };
  
    return (
      <Conteiner > 
         <Box {...settings} >
        {this.state.series.map((item, index) => (
         
            <figure key={index}>
               <img src={item.backdrop} />
              </figure>
            ))}  
          </Box>
        
       
        <H1> Série</H1>
        <Box_two>
        {this.state.series.map((item, index) => (
          <div key={index}>
            <ul >
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
