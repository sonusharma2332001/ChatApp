import React, { useContext } from 'react'
import Camera from '../Img/Camera.png'
import People from '../Img/People.png'
import More from '../Img/More.png'
import Massages from './Massages'
import Input from './Input'
import { ChatContext } from "../Context/ChatContext"

const Chat = () => {
  const {data} = useContext(ChatContext)
  return (
    <div className='chat'>
     <div className="chatInfo">
     <span>{data.user?.displayName}</span>
      <div className="chatIcons">
        <img src={Camera} />
        <img src={People} />
        <img src={More} />
      </div>
      </div>
      <Massages/>
      <Input/>
    </div>
  )
}

export default Chat
