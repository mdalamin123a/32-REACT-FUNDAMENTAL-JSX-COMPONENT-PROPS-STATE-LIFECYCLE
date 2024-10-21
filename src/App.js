import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ["Anwar", "Jafor", "Alomgir", "Salman"];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Person name="Munna" profession="Engeneer"></Person>
        <Person name="Masud" profession="Football"></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(test){
  return (
    <div style={{border:'2px solid gold', margin:"10px", width:"400px"}}>
      <h3>My Name: {test.name}</h3>
      <p>My Profession: {test.profession}</p>
    </div>
  );
}

export default App;