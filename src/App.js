import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name:'Dr. Mhafuz',
    job:'Singer',
  };
  var person2 = {
    name:'Eva Rahman',
    job:'Kokil Konthi',
  };
  var style = {
    color: "red",
    backgroundColor: 'yellow',
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  const personStyle = {
    border: "2px solid red",
    margin: "10px",
  }
  return(
    <div style={{border: "2px solid yellow", margin: "10px",}}>
      <h1>Name: Shakib</h1>
      <h3>Hero of the year</h3>
   </div>
  );
} 

export default App;