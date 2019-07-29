import React from "react"
import PageHeader from "../components/pageHeader"
import Layout from "../components/layout"
import Card from "../components/card";

export default () => (
    <Layout>
        <PageHeader headerText="Hi there!" />
        <Card title="Coder" body="C#, JavaScript, Angular, React, Python, C++, Scala" />
        <Card title="Learner" body="Studying Data Science at University of Edinburgh" />
        <Card title="Teacher" body="Former Lecturer in Software Engineering and Computer Games Programming" />
    </Layout>
)