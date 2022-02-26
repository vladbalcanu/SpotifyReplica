import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { LandingPage } from './pages/landingpage';
import Navbar from './components/navbar';
import { SignUpPage } from './pages/signup';
import { SignInPage } from './pages/signin';


function App() {
  const [name,setName] =useState("");
  const [isAuth,setIsAuth] =useState(false);

    useEffect(()=>{
        (
            async () =>{
            const response =await fetch("http://localhost:8000/api/user",{
            method:"GET",
            headers: { 'Content-Type': 'application/json' },
            credentials:'include'
        });
        const content= await response.json();
        setName(content.name);
        if(name!= ''){
          setIsAuth(true);
        }else{
          setIsAuth(false);
        }
        console.log(name)

        }
        )();
    });
  return (
    <BrowserRouter>
    <Navbar user= {isAuth}/>
      <Routes>
        <Route exact path="/" element ={<LandingPage />}/>
        <Route exact path="/signup" element ={<SignUpPage/>}/>
        <Route exact path="/signin" element={<SignInPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
