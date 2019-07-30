import React from "react"
import { Link } from "gatsby"

import navigationStyles from "./navigation.module.css"

const ListLink = props => (
  <li>
    <Link className={navigationStyles.link} to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <div className={navigationStyles.navigation}>
    <ul className={navigationStyles.list}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <li><a className={navigationStyles.link} href="/cv.pdf">CV</a></li>
    </ul>
  </div>
)