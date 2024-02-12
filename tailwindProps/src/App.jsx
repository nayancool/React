import { useState } from 'react'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl md:m-4'>Tailwind test</h1>

      <Card userName = 'Ayyein' btnText='Click Me'></Card>
      <Card userName ='TangeWala' btnText='Follow Me'></Card>
      <Card></Card>
    </>
  )
}

export default App
