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
                <p>I'm a Software Engineer with a fascination for Data. I'm particularly interested in Data Analytics and I'm excited by the possibilities that data opens up to the world, although I'm also very aware of the social responsibility we all share when it comes to Data.</p>
                <p>I'm a advocate of Lean processes and my thinking is heavily influenced by the Toyota Production System. There is nothing I appreciate more than a lean process that allows me to get things done, to deliver quickly and to a high quality.</p>
                <p>Throughout my career I have worked with a variety of different programming languages and I see myself as a diverse multi-disciplined software engineer. I always enjoy learning new technologies and never shy away from a new opportunity to do so.</p>
                <p>I'm an advocate for Clean Coding techniques and reducing technical debt whenever possible. I have a solid (pun intended) understanding of fundamental software engineering techniques and principles and I throughly enjoying sharing these thoughts with others.</p>            
            </div>
        </div>
    </Layout>
)