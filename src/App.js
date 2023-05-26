import './App.css';
import DisplayAuth from './components/DisplayAuth'

function App() {
  return (
    <div>
      <header className="header">
        <h1>React Context API with useReducer</h1>
      </header>
      <main className="main__container">
        <DisplayAuth />
      </main>
    </div>
  );
}

export default App;
