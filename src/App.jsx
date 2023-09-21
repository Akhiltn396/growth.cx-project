import { useState } from "react";

import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Customers from "./components/Customers/Customers";
import Footer from "./components/Footer/Footer";
import SubFooter from "./components/SubFooter/SubFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="container">
        <NavBar />
        <Hero />
        <Customers />
        <Footer />
        <SubFooter />
      </div>
    </div>
  );
}

export default App;
