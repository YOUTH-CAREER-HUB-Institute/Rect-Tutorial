import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyClassComp from './components/class-base-componenet'
import MyFunctionComp from './components/functional-components'
import ProductList from './components/products'


const dummyProductData = ["product 1", "product 2", "product 3", "product 4"];

function App() {
  const [count, setCount] = useState(0)

  return(
    <div>
      <h1>React Tutorial Day:1</h1>

      {/*<MyClassComp/>
      <MyFunctionComp/>*/}

      <ProductList listOfProduct = {dummyProductData} />
    </div>
  )
}

export default App
