import './App.css';
import Login from './components/Login';
import NavbarCollapse from './components/NavbarCollapse';
import Navbar from './components/NavbarCollapse';

function App() {
  return (
    <div>
      <NavbarCollapse />
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    </div>
  );
}

export default App;
