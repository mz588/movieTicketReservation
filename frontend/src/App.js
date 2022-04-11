// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login"
import Header from "./components/Header"
import Home from "./components/Home"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/">
            <Route path ="/" element={<Login />} ></Route>
          </Route>
          <Route exact path="/">
            <Route path ="/" element={<Home />} ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
