import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';
const App = () => (
  <div>
    <Navigation />
    <Route exact Path="/" component={Home} />
    <Route Path="/about" component={About} />
    <Route Path="/contact" component={Contact} />
  </div>
);

export default App;
