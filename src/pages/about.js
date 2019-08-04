import React from "react"
import Layout from "../components/layout"

import aboutStyles from "./about.module.css"

export default ({ data }) => {
    const about = data.markdownRemark
    const { frontmatter } = about
    return (
        <Layout>
            <div className={aboutStyles.card}>
                <div className={aboutStyles.meta}>
                    <div className={aboutStyles.photo} style={{backgroundImage: 'url(' + frontmatter.photo + ')'}}></div>
                </div>
                <div className={aboutStyles.description}>
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.subTitle}</h2>
                    <div dangerouslySetInnerHTML={{ __html: about.html }} />
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
query {
    markdownRemark(fileAbsolutePath: {regex: "\\/about\\\\.md$/"}) {
      html
      frontmatter {
        photo
        subTitle
        title
      }
    }
  }
  
`