import React from "react"

import cardStyles from "./card.module.css"

export default (props) => {
  const { card } = props
  const { frontmatter } = card  
  return (
    <div className={cardStyles.card + (frontmatter.alt ? ' ' + cardStyles.alt : '')}>
      <div className={cardStyles.meta}>
        <div className={cardStyles.photo} style={{backgroundImage: `url(${ frontmatter.photo})`}}></div>
      </div>
      <div className={cardStyles.description}>
        <h1>{ frontmatter.title}</h1>
        <h2>{ frontmatter.subTitle}</h2>
        <div dangerouslySetInnerHTML={{ __html: card.html }} />
      </div>
    </div>
  )
}