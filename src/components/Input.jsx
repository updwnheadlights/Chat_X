import React from 'react'
import Img from "../img/Img.png"
import Attach from "../img/Attach.png"

const Input = () => {
  return (
    <div className='Input'>
      <input type="text" placeholder="Type a message" />
      <div className="send">
        <img src={Attach} alt='' />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor='File'>
          <img src={Img} alt='' />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
