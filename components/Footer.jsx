import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Sony HeadPhones All Rights Reserved.</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer