import react, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ["Anwar", "Jafor", "Alomgir", "Salman", "Bappi", "Shuvo"];
  const products = [
    {name: 'PhotoShop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere El', price: '$246.99'},
  ];

  // const productNames = products.map(product => product.name);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>

          {
           nayoks.map(nayok => <li>{nayok}</li>)
          }

          {
            products.map(product => <li>{product.name}</li>)
          }

        </ul>
        {
          products.map(product => <Product product= {product}></Product>)
        }
        <Person></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);

   const handleIncrease = () => setCount(count + 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count -1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
    console.log(document.getElementById('test'));
  }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul id={'test'}>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
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