import React from "react" 

import Navigation from "../components/navigation"
import Social from "../components/social"

import layoutStyles from "./layout.module.css"

export default ({ children }) => (
    <div className={layoutStyles.content}>
      <header>
          <h1>Paul Boocock</h1>
          <Navigation />
      </header>
      <div className={layoutStyles.layout}>
        {children}
      </div>
      <footer>
        <Social />
      </footer>
    </div>
)