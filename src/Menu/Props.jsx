import React from 'react'
import card1 from '../assets/Card1.jpg'
function Props ({data})  {[[]]
  return (
    <div className='container'>
      <div className='Props-container'>
        <div className='props-list'>
        <div className='Props-box'>
            <div className='props-img'>
            <img className='props-img1' src={data.img} alt=""    />
            </div>
            <h4 className='props-title'>{data.title}</h4>
            <p className='props-text'>{data.text}</p>
            <div className='props-wrap'>
                <p className='props-name'>{data.price} сум</p>
                <button className='props-button'>{data.button}</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Props
