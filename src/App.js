import React, { useState } from 'react';
import { BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import Header from './Header';
import Menu from './Menu';
import HeaderBlog from './HeaderBlog';
import Login from './Login';
import './App.css';
import SignUp from './SignUp';

function App() {
  const user=useSelector(selectUser)
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
            {user?<Redirect to='/teslaaccount'/>:<Login/>}
            {/* <Login/> */}
          </Route>
          <Route path='/signup'>
            <SignUp/>
          </Route>
          <Route path='/teslaaccount'>
            YES
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
