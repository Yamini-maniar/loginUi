import logo from './logo.svg';
import './App.css';
import AppHeader from './Components/AppHeader';
import AppCard from './Components/AppCard';

function App() {
  return (
    <div >
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
      <AppHeader/>
      <AppCard/>
    </div>
  );
}

export default App;
