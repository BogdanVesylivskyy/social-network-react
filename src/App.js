import banner from './assets/banner.jpg';
import './App.scss';
import React from "react";

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Profile/Dialogs/Dialogs";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Profile />
                {/*<Dialogs />*/}
            </div>

        </div>
    );
}


export default App;
