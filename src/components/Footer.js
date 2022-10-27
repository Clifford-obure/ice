import React from 'react'
import slake from '../Assets/146-1461647_icon-slack-logo-hd-png-download.png'
import git from '../Assets/download.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div >
        <a href='https://slake'><img src={slake} alt="slake" className='img'/></a>
        <a href='https://git'><img src={git} alt="git" className='img'/></a>
      </div>
    </div>
  )
}

export default Footer
