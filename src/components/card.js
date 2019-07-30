import React from "react"

import cardStyles from "./card.module.css"

export default props => (
    <div className={cardStyles.card + (props.alt ? ' ' + cardStyles.alt : '')}>
    <div className={cardStyles.meta}>
      <div className={cardStyles.photo} style={{backgroundImage: `url(${props.photo})`}}></div>
    </div>
    <div className={cardStyles.description}>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
      <p>{props.body}</p>
    </div>
  </div>
)