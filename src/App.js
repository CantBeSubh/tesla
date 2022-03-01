import React, { useState } from 'react';
import Header from './Header';
import { BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Menu from './Menu';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Router>
      <div className='App'>
        {/* Header */}
        <Header
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        />
        {isMenuOpen&& <Menu/>}
        {/* Header Blog */}


      </div>
    </Router>
  );
}

export default App;
