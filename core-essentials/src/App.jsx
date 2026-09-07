import './App.css'
import {Greet} from './Greet'
import {Button} from './Button'
import { Curly } from './Curly'
import { Props } from './Props'
import { Product } from './Product'
import { UserDetails } from './UserDetails'
import { ProductList } from './ProductList'

function App() {
  return (
    <>
      <h1> React Essentials </h1>
      <hr />
      <ProductList/>
      <hr />
      <UserDetails name="Peter" isOnline={true} status={"New User"}/>
      <UserDetails name="Patrick" isOnline={false} status={"New User"}/>
      <hr />
      <Props name="Max" age = "21" />
      <Props name="John" />
      <Props name="Alex" />
      <hr />
      <Product title="Professional Laptop" price = {5000} inStock={true} categories={["PC", "Electronics", "Laptops"]}/>
      <hr />
      <Curly />
      <Greet />
      <Button />
    </>
  )
}

export default App