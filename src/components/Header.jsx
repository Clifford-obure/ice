import React from 'react';
import image from '../Assets/photo-1438761681033-6461ffad8d80.avif';

const Header = () => {
  return (
    <div className='headers'>
      <div>
        <img src={image} alt="logo" className='object-center h-2 w-10 image'/>
      </div>
      <div className='name'>
        <h2>Icequeen</h2>
      </div>
    </div>
  )
}

export default Header
