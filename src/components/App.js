import React from "react";
import './App.css';
import Header from "./Header";
import Info from "./Info";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="course-container">
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
      </div>
      <Footer />
    </div>
  );
}

export default App;
