import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import "./app.css";

function App() {
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/cart" element = {<Cart/>}/>
      </Routes>    
      </div>
  );
}

export default App;
