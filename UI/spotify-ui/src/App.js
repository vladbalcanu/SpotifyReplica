import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { LandingPage } from './pages/landingpage';
import Navbar from './components/navbar';
import { LogInPage, SignUpPage } from './pages/signin';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element ={<LandingPage/>}/>
        <Route exact path="/signup" element ={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
