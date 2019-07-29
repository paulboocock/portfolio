import React from "react"

import cardStyles from "./card.module.css"

export default props => (
    <div className={cardStyles.card}>
        <h2>{props.title}</h2>
        <div className={cardStyles.body}>
            {props.body}
        </div>
    </div>
)