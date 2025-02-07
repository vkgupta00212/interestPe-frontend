import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import NotFound from "./Component/NotFound"
import Footer from"./Component/Footer/Footer"
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
              <NavBar/>
            <Routes>
            <Route path="/" element = {<Home/>}></Route>
              <Route path="notfound" element = {<NotFound/>}></Route>
            </Routes>
            <Footer/>
      </div>
    </Router>
  );
}

export default App;
