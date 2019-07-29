import React from "react"
import { Link } from "gatsby"

import Navigation from "../components/navigation"

import layoutStyles from "./layout.module.css"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
    <div className={layoutStyles.content}>
      <header>
          <h3>Paul Boocock</h3>
          <Navigation />
      </header>
      <div className={layoutStyles.layout}>
        {children}
      </div>
      <footer>
        <div>Footer</div>
      </footer>
    </div>
)