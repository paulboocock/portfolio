import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import Navigation from "../components/navigation"

import layoutStyles from "./layout.module.css"

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
        <ul>
          <li><a href="https://www.linkedin.com/in/pboocock"><FontAwesomeIcon icon={faLinkedin} className={layoutStyles.social} /></a></li>
          <li><a href="https://twitter.com/paul_boocock"><FontAwesomeIcon icon={faTwitterSquare} className={layoutStyles.social} /></a></li>
          <li><a href="https://github.com/paulboocock"><FontAwesomeIcon icon={faGithubSquare} className={layoutStyles.social} /></a></li>
        </ul>
      </footer>
    </div>
)