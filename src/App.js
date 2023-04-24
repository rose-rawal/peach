import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SingleCocktail from './pages/SingleCocktail';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Bottom from './components/bottom';
function App() {
  return (
    <div className='contain'>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}>
        </Route>
        <Route exact path='/about' element={<About/>}>
        </Route>
        <Route exact path='/cocktail/:id' element={<SingleCocktail/>}>
        </Route>
        <Route exact path='*' element={<Error/>}>
        </Route>
      </Routes>
      <Bottom/>
    </Router>
    </div>
  );
}

export default App;
