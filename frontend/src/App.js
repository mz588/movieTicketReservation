// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login"
import Header from "./components/Header"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Search from "./components/Search"
import Movies from './components/Movies'
import Theatres from './components/Theatres';
import Dashboard from './components/Dashboard';
import Detail from './components/Detail';

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
          <Route exact path="/Movies">
            <Route path ="/Movies" element={<Movies />} ></Route>
          </Route>
          <Route exact path="/Theatres">
            <Route path ="/Theatres" element={<Theatres />} ></Route>
          </Route>
          <Route exact path="/Dashboard">
            <Route path ="/Dashboard" element={<Dashboard />} ></Route>
          </Route>
          <Route path="/detail/:id">
            <Route path ="/detail/:id" element={<Detail />} ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
