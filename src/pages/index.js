import React from "react"
import Layout from "../components/layout"
import Card from "../components/card";

import { graphql } from "gatsby"

import indexStyles from "./index.module.css"

export default ({ data }) => (
    <Layout>
      <div className={indexStyles.cards} >
          { 
            data.allMarkdownRemark.edges.map(
              ({ node }) => (
                <Card key={node.id} card={node} />
              )
            ) 
          }
        </div>
    </Layout>
)
export const query = graphql`
query {
    allMarkdownRemark(
      limit: 8, 
      sort: {fields: [frontmatter___order], order: ASC}, 
      filter: {fileAbsolutePath: {regex: "/(\\/content\\/cards)/.*\\\\.md$/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            subTitle
            photo
          }
          html
        }
      }
    }
  }  
`