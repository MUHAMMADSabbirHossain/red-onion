// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignOut from './Components/SignOut/SignOut';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import About from './Components/About/About';
import SignUp from './Components/SignUP/SignUp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* navigation bar */}
      <NavigationBar></NavigationBar>

      {/* react router */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="userprofile" ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signout" element={<SignOut></SignOut>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
