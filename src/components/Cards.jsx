import React from 'react'
import starImg from '../assets/Star 1.svg'
import cardData from '../../data'

const Cards = () => {
  return (
    <div className='cards'>
      <div className="card-wrapper container">
        {
          cardData.map((data, index
          ) => {
            return (
              <div className="card" key={index}>
                <div className='card-avatar'>
                  <img src={data.img} alt="" />
                </div>
                <div className="rating">
                  <div>
                    <img src={starImg} alt="" />
                  </div>
                  <span className='final-rating'>
                    {data.finalRating}
                  </span>
                  <span className='total-person'>({data.totalPerson})</span>
                  <span className='country'>.{data.country}</span>
                </div>
                <div className="card-desc">
                  <p>{data.cardDesc}</p>
                </div>
                <div className="pricing">
                  <span className='bold'>{data.price}</span>
                  <span>/ person</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards