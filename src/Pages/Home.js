import React from 'react'
import Sidebar from '../Componets/Sidebar'
import Chat from '../Componets/Chat'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home