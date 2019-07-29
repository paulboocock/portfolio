import React from "react"
import { Link } from "gatsby"

import navigationStyles from "./navigation.module.css"

const ListLink = props => (
  <li className={navigationStyles.link}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <div className={navigationStyles.navigation}>
    <ul className={navigationStyles.list}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </div>
)