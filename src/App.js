import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

const App = ()=> {
  return(
<div className="App">
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/watch" element={<Watch/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App;
