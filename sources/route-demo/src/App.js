import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import {Route, Routes, Link} from "react-router-dom";
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="App">
      <ul id="menu">
        <li>
          <Link to="/">Home</Link>
         
          
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <hr />
      <AppRoutes />
    </div>
  );
}

export default App;
