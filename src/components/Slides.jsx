import React from 'react'
import data from '../data'
import One from './One'

const Slides = () => {
 
  
  return (
    <div>
      {data.map(name=>( 
          <One properties={name} key={name.id} />
      ))}
      </div>
    
  )
}

export default Slides
