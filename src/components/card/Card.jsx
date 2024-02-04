import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.item.imageUrl} alt="imagem ilustrativa" className='card--image' />
      <div className='card--head'>
        <span class="material-symbols-outlined">distance</span>
        <p className='card--location'>{props.item.location.toUpperCase()}</p>
        <a href={props.item.googleMapsURL} target='blank' className='card--link'>View on Google Maps</a>
      </div>
      <div className='card--bottom'>
        <h3 className='card--title'>{props.item.title}</h3>
        <p className='card--date'>{props.item.startDate} - {props.item.endDate}</p>
        <p className='card--description'>{props.item.description}</p>
      </div>
    </div>
  )
}

export default Card