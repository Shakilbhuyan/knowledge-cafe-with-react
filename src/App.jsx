import { useState } from 'react'
import './App.css'
import Header from './Componants/Header/Header'
import Blog from './Componants/Blog/Blog'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <ToastContainer />
    </div>
  )
}

export default App
