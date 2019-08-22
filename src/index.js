import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Thumbnail from "./components/Thumbnail";
import Footer from "./components/Footer";
import "./assets/css/main.css";

function App() {
  return (
    <div id="main" className="App">
      {/* <!-- Header --> */}
      <Header />
      {/* <!-- Thumbnail --> */}
      <Thumbnail />
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
