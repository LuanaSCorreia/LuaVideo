import axios from "axios";


const Series = axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv/popular?api_key=b8e8a17e0fc5181b8d780d64b08c7782&language=pt-BR&page=1'

});


export default Series;

