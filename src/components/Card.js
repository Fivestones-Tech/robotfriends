import React from 'react'
import './Card.css'


export default function Card({name, email, id}) {
  return (
    // <h1></h1>
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robotic' src={`https://robohash.org/${id}test?200x200`}/>
        <div>
            <h2>{ name }</h2>
            <p>{ email }</p>
        </div>
    </div>
  )
}
