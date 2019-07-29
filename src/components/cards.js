import React from "react"

import Card from "../components/card";

import cardsStyles from "./cards.module.css"

export default () => (
    <div className={cardsStyles.cards}>
        <Card title="Coder" body="Multi-disciplined Coder. Experince with C#, JavaScript, Angular, React, Python, C++, Scala" />
        <Card title="Learner" body="Always Reading. Currently studying Data Science at University of Edinburgh" />
        <Card title="Teacher" body="Great communication and listening skills. Former Lecturer in Software Engineering and Computer Games Programming" />
        <Card title="Data" body="Love Data. Recent databases include BigQuery, PostgreSQL, Cassandra and SQL Server" />
        <Card title="Analytics" body="Experienced with Snowplow, Hotjar, Google Analytics and Looker" />
        <Card title="Lean" body="Advocate of Single Piece Flow, Toyota Production System, Kanban and Kaizen" />
    </div>
)