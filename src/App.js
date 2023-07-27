import React from 'react';
import "./App.scss";
import Home from './Pages/Home';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import Watch from './Pages/Watch/Watch';
import { BrowserRouter, Routes, Route, Link,Navigate} from "react-router-dom";

import {Switch} from "react-router-dom"

const App = () => {
  const user=false;
  return (
  
   <BrowserRouter>
      <Routes>
         <Route path='/' exact element={<Home/>}/>
         
          <Route path='/movies' element={<Home type="movies"/>}/>

          <Route path='/series' element={<Home type="series"/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/watch' element={<Watch/>}/>
          <Route path='/logout' element={<Login/>}/>




   

      </Routes>
   </BrowserRouter>
  
  );
}

export default App;
