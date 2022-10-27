import React from 'react'
import videocall from "../img/videocall.png"
import more from "../img/more.png"
import friendship from "../img/friendship.png"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='Chat'>
      <div className="ChatInfo">
        <span>James</span>
        <div className="ChatIcons">
          <img src={videocall} alt='' />
          <img src={friendship} alt='' />
          <img src={more} alt='' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
