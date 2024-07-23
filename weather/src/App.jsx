import React from 'react'
import Home from './pages/Home'
import weather from '../src/assets/weather1.jpg'
const App = () => {
  return (
    <div className='w-full bg-cover'
    style={{ backgroundImage: `url(${weather})` }}
  >
 <Home/>

    </div>

  )
}

export default App
