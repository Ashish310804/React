import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman Singh' age={18} img='' />
      <Card user='Sarthak' age={28} img='' />
      <Card user='Aditya' age={24} img='' />
    </div>
  )
}

export default App