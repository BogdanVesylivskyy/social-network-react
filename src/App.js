import logo from './logo.svg';
import banner from './banner.jpg';
import './App.scss';

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


            <header className="header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>

            <nav className="nav">
                <ul>
                    <li><a href='#1'>Profile</a></li>
                    <li><a href='#2'>Messages</a></li>
                    <li><a href='#3'>News</a></li>
                    <li><a href='#3'>Music</a></li>
                    <li><a href='#3'>Settings</a></li>
                </ul>
            </nav>

            <div className="contentContainer">
                <div className="banner">
                    <img
                        src={banner}
                        alt="img"/>
                </div>

                <div className="avatarWrapper">
                    <div className="avatar"> <img src="https://toppng.com/uploads/preview/banner-frame-in-picsart-11549987902mawgklxvbs.png" /></div>
                    <div className="description">description</div>
                </div>
                <div>
                    my post
                </div>

                <div>
                    new post
                </div>

                <div>
                    <div>post1</div>
                    <div>post2</div>
                </div>

            </div>


        </div>
    );
}


export default App;
