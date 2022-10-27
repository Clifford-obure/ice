import React from 'react'


const One = ({properties}) => {
    
  return (
    <div>

      <div className='one'>
        <a href={properties.link} className="link">
        <p className='para'>{properties.name}</p>
        </a>
      </div>
      
    </div>
  )
}

export default One
