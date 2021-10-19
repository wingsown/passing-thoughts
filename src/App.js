import './App.css';
import { AddThoughtForm } from './AddThoughtForm'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>

      <main>
        <AddThoughtForm />
      </main>
    </div>
  );
}

export default App;
