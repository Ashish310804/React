import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Ashish Dwivedi' age={21} img='https://plus.unsplash.com/premium_photo-1764699345499-50440f0bfb17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Harsh Chauhan' age={22} img='https://images.unsplash.com/photo-1770242555231-273794231d6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
      <Card user='Aman Singh' age={20} img='https://images.unsplash.com/photo-1770701195265-8af0dc148446?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
    </div>
  )
}

export default App