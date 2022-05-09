import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Ayuda from './pages/Ayuda';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Reports' component={Reports} />
          <Route path='/Products' component={Products} />
          <Route path='/Ayuda' component={Ayuda} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
