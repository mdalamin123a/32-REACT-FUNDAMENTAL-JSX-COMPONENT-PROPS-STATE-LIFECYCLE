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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        {/* <h1>My Heading: {(2+5)*25+65}</h1> */}
        <h1 className='' style={style}>My Heading: {person.name + ' ' + person.job}</h1>
        <h3 style={{backgroundColor:'cyan', color:'yellow'}}>Singer: {person2.name + ' ' + person2.job}</h3>
        <p>My First React Paragraph</p>
      </header>
    </div>
  );
}

export default App;


/**
 * We can write html on js return(). this is called as jsx. 
 * {} used to print js expression or dynamic content under jsx.
 * className='' is used to give a class name on jsx tag/element
 * style={{backgroundColor:'red', color:'yellow'}} is used to give incline css/style on tag/element 
 * import "./App.css" is used to load external css file
 */