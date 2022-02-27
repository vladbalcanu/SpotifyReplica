import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { LandingPage } from './pages/landingpage';
import Navbar from './components/navbar';
import { SignUpPage } from './pages/signup';
import { SignInPage } from './pages/signin';
import { useSelector,useDispatch } from 'react-redux';
import {login} from './features/auth/auth-slice'
import {MainPage} from './pages/mainpage/index'


function App() {
  const [name,setName] =useState("");
  const isAuth = useSelector((state) => state.auth.value)
  const dispatch = useDispatch();


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
        console.log(name)
        }
        )();
    });
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element ={<LandingPage />}/>
        <Route exact path="/signup" element ={<SignUpPage/>}/>
        <Route exact path="/signin" element={<SignInPage/>}/>
        <Route exact path="/mainpage" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
