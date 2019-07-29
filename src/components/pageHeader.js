import React from "react"

import headerStyles from "./pageHeader.module.css"

export default props => <div className={headerStyles.pageHeader}><h1>{props.headerText}</h1></div>