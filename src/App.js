import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home';
import NavTabs from './components/NavTabs';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import Footer from './components/Footer'

import Header from './components/Header'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
