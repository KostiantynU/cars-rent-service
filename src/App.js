import { Routes, Route } from 'react-router-dom';
import SideBarLayout from './layout/SideBarLayout/SideBarLayout';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SideBarLayout />}></Route>
    </Routes>

    /* <header className="App-header">
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
      </header> */
  );
}

export default App;
