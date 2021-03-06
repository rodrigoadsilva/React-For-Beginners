import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Prices from './components/Prices'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './admin/Login'
//Administration Area
import Admin from './admin/Admin'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <div className='container'>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/prices' component={Prices}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/login' component={Login}/>
        </div>
        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
