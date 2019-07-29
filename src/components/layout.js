import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={{color: 'grey'}}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
            <h3 style={{ display: `inline` }}>Paul Boocock</h3>
            <ul style={{ listStyle: `none`, float: `right`, margin: 0 }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
        </header>
        {children}
    </div>
)