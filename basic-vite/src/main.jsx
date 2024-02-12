import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const textToShow = "Hey Sexy!, Click Me!😁😁"

const ReactElement = React.createElement(
  'a',
  {href : 'https://google.com',
  target : '_blank'},
  textToShow
)
  

ReactDOM.createRoot(document.getElementById('root')).render(
    ReactElement
)
