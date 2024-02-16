import React from 'react';
import './App.scss';
import Page from "./app/page";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
        <Header />
        <Page />
        <Footer />
    </div>
  );
}
