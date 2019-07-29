import React from "react"
import PageHeader from "../components/pageHeader"
import Layout from "../components/layout"
import Cards from "../components/cards";

export default () => (
    <Layout>
        <PageHeader headerText="Hi there!" />
        <Cards />
    </Layout>
)