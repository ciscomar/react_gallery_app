import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';

//Importing all components
import Header from './components/Header'
import Search from './components/Search'
import Body from './components/Body'
import NotFound from './components/NotFound'

//Routes to each path for the buttons
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={() => (<Search />)}></Route>
            <Route path="/city" component={() => (<Body query={"city"} />)}></Route>
            <Route path="/nature" component={() => (<Body query={"nature"} />)}></Route>
            <Route path="/animals" component={() => (<Body query={"animals"} />)}></Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
