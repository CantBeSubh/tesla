import React, { useState } from 'react';
import Header from './Header';
import { BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Menu from './Menu';
import './App.css';
import HeaderBlog from './HeaderBlog';
import Login from './Login';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            {isMenuOpen && <Menu/>}
            <HeaderBlog/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
