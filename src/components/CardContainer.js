import React, { memo } from 'react'

export default memo(function CardContainer(props) {
  return (
    <div className={`cardContainer${props.cardsInARow}`}>
      {props.children}
    </div>
  )
})
