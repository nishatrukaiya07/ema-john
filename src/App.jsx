import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import Product from './Components/Product/Product'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Header></Header>
        <Shop></Shop>
        {/* <Product></Product> */}
      </div>

    </>
  )
}

export default App 
