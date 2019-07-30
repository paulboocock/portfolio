import React from "react"
import Layout from "../components/layout"

import aboutStyles from "./about.module.css"

export default () => (
    <Layout>
        <div className={aboutStyles.card}>
            <div className={aboutStyles.meta}>
                <div className={aboutStyles.photo} style={{backgroundImage: 'url(me.jpg)'}}></div>
            </div>
            <div className={aboutStyles.description}>
                <h1>About</h1>
                <h2>A little more about me</h2>
                <p>I'm a Software Engineer who has a keen interest in process improvement and working closely with those around me. I'm a advocate of Lean processes and my thinking is heavily influenced by the Toyota Production System.</p>
                <p>Throughout my career I have worked with a variety of different programming languages and always enjoy learning new technologies. I'm an advocate for Clean Coding techniques and reducing technical debt whenever possible. I have a good understanding of fundamental software engineering techniques and principles and I throughly enjoying sharing these thoughts with others.</p>            
            </div>
        </div>
    </Layout>
)