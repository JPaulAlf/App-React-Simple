import React from 'react';
import { Routes , Route } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';

const Main = () => {
  return (
    <Routes > {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
  );
}

export default Main;