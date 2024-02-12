import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

//let counter = 15;
  //hook
  const [counter, setCounter] = useState(7) //useState array return karta hai hai 0 index me var ka name jo updat hoga ans 1 me funtion to ececute this
  const addValue = () =>
  {
      // counter +=1;
      if(counter<=19)
      {
        setCounter(counter+1)
      }else{
        alert("Aukad me rho, Iske upar nhi.")
      }
      console.log(counter);
  }

  const subValue = () =>
  {
    // counter -=1;
    if(counter >=1)
    {
    setCounter(counter-1)
    }
    else{
      alert("Teri Aukad iske upar hai beta..")
    }
    console.log(counter);
  }

  return (
    <>
      <h1>Hey Sexy!! Kya scene!!</h1>
      <h2>Plus minus khele😁</h2>

      <button onClick={addValue}>➕Mujhe badhaoo {counter}➕</button>
      <br></br>
      <button onClick={subValue}>➖Mujhe ghataoo {counter}➖</button>
    </>
  )
}

export default App
