import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Movie search page</h1>

      <div>
        <input type="text" placeholder='Search Movie..' />
        <button type='submit'>Search</button>
      </div>
    </div>
    {/*
    TODO

    LAYOUT
    <title>
    
    searchbox
    resultsbox
      result-item
        movie
          title
          poster
      */}
    </>
  )
}

export default App
