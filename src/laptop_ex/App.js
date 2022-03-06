import { Laptop } from './Laptop';


const laptop = {
    name: "HP Laptop 15S-FQ2000NJ 308A3EA ",
    price: 1500,
    ram:16,
    cpu:"SDfsdf"
}

function App() {


  return (

      <Laptop laptop={laptop}/>
  );
}

export default App;
