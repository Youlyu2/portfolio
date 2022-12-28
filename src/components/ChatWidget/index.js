import { useEffect, useState } from 'react'
import { BsChatSquareTextFill } from "react-icons/bs"
import './index.scss'
import ChatWindow from './ChatWindow'

const ChatWidget = () => {

  const [openChat, setOpenChat] = useState(false)
  const handleClick = () => setOpenChat(!openChat)


  return (
    <div className='chat-widget-container'>
      { openChat && <ChatWindow></ChatWindow>}
      <BsChatSquareTextFill className='chat-icon' onClick={handleClick}/>
      
    </div>
    
  )
}

export default ChatWidget
