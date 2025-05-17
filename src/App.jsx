import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-red-500'>Hello, world</p>
      <div className='h-7 w-7 bg-red-600'>
        <p>Test</p>
      </div>
    </>
  )
}

export default App
