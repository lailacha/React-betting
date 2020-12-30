import './App.css';
import Navbar from './components/Navbar/Navbar'
import Match from './components/Match/Match'
import Home from './components/Home/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ThemeContext from './components/ThemeContext'
import {useState} from 'react';

function App() {

const [theme, setTheme] = useState(true);
 const toggleTheme = () => {
   setTheme(!theme);
 }
  return (
    <Router>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
<div className="App">
    <Navbar></Navbar>
     <Route exact path='/' component={Home} />
     <Route exact path='/match' component={Match} />
    
    </div> 
    </ThemeContext.Provider>
    </Router>
   
  );
}

export default App;
