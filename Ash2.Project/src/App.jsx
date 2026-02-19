import React from 'react'
import card from './components/Card'
const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>Ashish Dwivedi</h1>
        <p>Software Engineer</p>
      </div>
      {card()}
    </div>
  )
}

export default App
