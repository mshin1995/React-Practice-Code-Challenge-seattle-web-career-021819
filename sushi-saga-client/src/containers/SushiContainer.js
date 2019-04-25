import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.displaySushi.map(sushi =>
          <Sushi
            key={sushi.id}
            sushi={sushi}
            name={sushi.name}
            price={sushi.price}
            img={sushi.img_url}
            eaten={props.eaten}
            eatSushi={props.eatSushi}
          />
        )}
        <MoreButton
          moreSushi={props.moreSushi}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer
