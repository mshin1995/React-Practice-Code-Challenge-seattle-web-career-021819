import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">{
        props.eaten.includes(props.sushi) ?
          <div className='plate'>
          </div> :
        <div className="plate" onClick={() => props.eatSushi(props.sushi)}>
          <img src={props.img} width="100%" />
        </div>
    }
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi
