import React from 'react';
import './footer.css';
import {AiFillInstagram,AiFillFacebook,AiOutlineTwitter,AiFillYoutube} from "react-icons/ai"
import {BiLogoSnapchat} from "react-icons/bi"
const Footer = () => {
  return (
    <div className='footer_div bg-dark text-white text-center'>
    
    
    <div className='container'>
    <div className='row'>
      <div className='col-md-6 mt-5'>
       <AiFillInstagram size="60" color="pink"/>
       <AiFillFacebook  size="60" color="blue"/>
       <BiLogoSnapchat size="60" color="yellow"/>
       <AiOutlineTwitter size="60" color="skyblue"/>
       <AiFillYoutube size="60" color="red"/>

      </div>
      <div className='col-md-6 d-flex flex-column justify-content-around align-items-center mt-5'>
       <p>
        Home
       </p>
       <p>
        About
       </p>
       <p>
        Services
       </p>

      </div>

    </div>

    </div>
    </div>
  )
}

export default Footer