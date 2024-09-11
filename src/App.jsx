import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Debouncing from './Debouncing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Debouncing />
    </>
  )
}

export default App
