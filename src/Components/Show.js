import React, {Component} from "react"; 
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


// Chave da API : a44f127bbbbc045d02967c1093702118
// Link das Series: https://api.themoviedb.org/3/tv/popular?api_key=a44f127bbbbc045d02967c1093702118&language=en-US&page=1

const seriesAPI = axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=a44f127bbbbc045d02967c1093702118&language=en-US&page=1"
})

export default class Show extends Component{

    state = {
        movies:[]
    }
    componentDidMount(){
        this.GetApi()  
    }

GetApi = async () => {
    const PegandoApi = await seriesAPI.get()

    const InfoSeries = PegandoApi.data.results.map(item => {
        return{
            nome: item.title,
            sinopse: item.overview,
            imagem:  `https://image.tmdb.org/t/p/w300/${item.poster_path}`
        }
    })

    this.setState({movies:InfoSeries})
    console.log(PegandoApi)
}

render(){
    return(
        <>  
            <h1>SERIES</h1>
            <ul>{this.state.movies.map(item => (
               <div>
               <h2>{item.nome}</h2>
                <p>{item.sinopse}</p>
                <img src={item.imagem} alt={item.nome}/> 
                </div>
            ))}</ul>
        </>
    )
}
}