import { useState } from 'react'
import './App.css'
import Header from './Componants/Header/Header'
import Blog from './Componants/Blog/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
    </div>
  )
}

export default App
