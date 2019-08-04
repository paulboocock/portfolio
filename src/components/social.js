import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import socialStyles from "./social.module.css"

export default () => (
    <ul className={socialStyles.list}>
        <li><a href="https://www.linkedin.com/in/pboocock"><FontAwesomeIcon icon={faLinkedin} className={socialStyles.icon} /></a></li>
        <li><a href="https://twitter.com/paul_boocock"><FontAwesomeIcon icon={faTwitterSquare} className={socialStyles.icon} /></a></li>
        <li><a href="https://github.com/paulboocock"><FontAwesomeIcon icon={faGithubSquare} className={socialStyles.icon} /></a></li>
    </ul>
)