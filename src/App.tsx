import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
        <Header />
        <div className="content" />
        <Footer />
    </div>
  );
}
