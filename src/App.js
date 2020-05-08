import React from 'react';
import Menu from './component/Menu';
import Footer from './component/Footer';
import './App.css';
import Home from './component/Home';
import Page2 from './component/Page2';
import Week3 from './component/Week3';
import Nothing from './component/Nothing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <img src={require('./assets/images/head.png')} width="100%"/>
        <Menu/>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Page2" component={Page2} />
          <Route path="/Week3" component={Week3} />
          <Route path="/Nothing" component={Nothing} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>  
  );
}

export default App;
