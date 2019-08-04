import React from "react"
import { Link } from "gatsby"

import navigationStyles from "./navigation.module.css"

const NavLink = props => (
  <li className={navigationStyles.linkItem}>
    <Link className={navigationStyles.link} to={props.to}>{props.children}</Link>
  </li>
)

const ExternalLink = props => (
  <li className={navigationStyles.linkItem}>
    <a className={navigationStyles.link} href={props.to}>{props.children}</a>
  </li>
)

export default () => (
  <ul className={navigationStyles.list}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about/">About</NavLink>
      <NavLink to="/contact/">Contact</NavLink>
      <ExternalLink to="/cv.pdf">CV</ExternalLink>
  </ul>
)