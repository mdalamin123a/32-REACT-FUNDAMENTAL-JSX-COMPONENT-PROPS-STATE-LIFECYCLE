import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ["Anwar", "Jafor", "Alomgir", "Salman"];
  const products = [
    {name: 'PhotoShop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {/* Pass Object to Component */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="Munna" profession="Engeneer"></Person>
        <Person name="Masud" profession="Football"></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Product(props){
  const productStyles = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
  };
  const {name, price} = props.product;
  console.log(props);
  return(
    <div style={productStyles}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
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

/**
 * Pass obj to component
 */