import React, { Component } from 'react';
//import styled from 'styled-components';
import axios from "axios";

const Filmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=b8e8a17e0fc5181b8d780d64b08c7782&language=pt-br&page=1'

})



export default class Footer extends Component {

    render() {
        return (
            <Filmes>

            </Filmes>
        )
    }
}