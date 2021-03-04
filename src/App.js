import banner from './banner.jpg';
import './App.scss';
import React from "react";

import Header from './Header'
import Navbar from './Navbar'
import Content from './Content'

function App() {
    return (
        <div className="app-wrapper">
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}


            <Header />
            <Navbar />
            <Content />


        </div>
    );
}


export default App;
