// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login"
import Header from "./components/Header"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Search from "./components/Search"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route exact path="/">
          <Route path ="/" element={<Home />} ></Route>
        </Route>
        <Route exact path="/Login">
          <Route path ="/Login" element={<Login />} ></Route>
        </Route>
        <Route exact path="/Signup">
          <Route path ="/Signup" element={<Signup />} ></Route>
        </Route>
        <Route exact path="/Search">
          <Route path ="/Search" element={<Search />} ></Route>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
