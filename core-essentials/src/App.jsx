import './App.css'
import {Greet} from './Greet'
import {Button} from './Button'
import { Curly } from './Curly'
import { Props } from './Props'
import { Product } from './Product'

function App() {
  return (
    <>
      <h1> React Essentials </h1>
      <Props name="Max" age = "21" />
      <Props name="John" />
      <Props name="Alex" />
      <Product title="Professional Laptop" price = {5000} inStock={true} categories={["PC", "Electronics", "Laptops"]}/>
      <Curly />
      <Greet />
      <Button />
    </>
  )
}

export default App