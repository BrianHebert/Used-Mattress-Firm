import { useState } from 'react'
import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Recipes from './pages/recipes'
import Products from './pages/prducts'
import RecipeInstructions from './pages/recipeInstructions'
import recipesData from "./recipesData"


function App() { 
  


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"/>
          <Route path="/recipes" element={<Recipes />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/recipeInstructions" element={<RecipeInstructions />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
