import React from "react";
import styled from "styled-components";
import Filmes from "./Filmes.js";
import Show from "./Show.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



export default class App extends React.Component{
  render(){
    return(
     <Router>
      <header>
      <Link to='/'><h3>HOME PAGE</h3></Link>
      <Link to='/Filmes'><h3>FILMES</h3></Link>
      <Link to='/Show'><h3>SERIADOS</h3></Link>
      


      </header>

      <Routes>
      <Route path='/Show' element={<Show/>}/>
      <Route path='/Filmes' element={<Filmes/>}/>
      <Route path='/' element={<Home/>}/>
      </Routes>
     </Router>
    )
  }
}