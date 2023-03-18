import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <h2>Reuse component</h2>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
    </div>
  );
}

function Hello(){
  return (
    <div>
      <h2>I Love my India</h2>
      <p>Reuse component</p>
    </div>
  )
}

export default App;
