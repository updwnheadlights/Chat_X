import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="UserChat">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmr4TL9v_2oun80IJqmUAfl2DKysnL6NA0w&usqp=CAU'/>
      <div className="UserChatInfo">
        <span>James</span>
        <p>Congratulations on the new Tesla!</p>
      </div>
    </div>
    <div className="UserChat">
      <img src='https://64.media.tumblr.com/c576acc607b1d836c2b6c0e8cffe4cd4/4230a0105634184c-af/s540x810/1dafae80d6bb6f161504ade3c3241f13d00c1847.jpg'/>
      <div className="UserChatInfo">
        <span>Stassie</span>
        <p>Are we still on for lunch?</p>
      </div>
    </div>
    <div className="UserChat">
      <img src='https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg'/>
      <div className="UserChatInfo">
        <span>Sam</span>
        <p>Can you help me with this bug?</p>
      </div>
    </div>
    <div className="UserChat">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G9ZamQqqlzUdWqMVVkpesU543b6QUXEPQaNnzjhJ&s'/>
      <div className="UserChatInfo">
        <span>Kyle</span>
        <p>Wanna play CS:GO?</p>
      </div>
    </div>
    </div>
  )
}


export default Chats
