import React from "react"
import { Link } from "gatsby"

import navigationStyles from "./navigation.module.css"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <div className={navigationStyles.navigation}>
    <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </div>
)