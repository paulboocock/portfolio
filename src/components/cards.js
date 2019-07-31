import React from "react"

import Card from "../components/card";

import cardsStyles from "./cards.module.css"

export default () => (
    <div className={cardsStyles.cards}>
        <Card title="Coder" subTitle="Multi-disciplined" body="I'm an experienced Software Engineer who is capable of picking up new languages and tools quickly. I have commercial experience of C#, JavaScript, Angular, React, Python and Java." photo="coder.jpg" />
        <Card title="Data &amp; Analytics" subTitle="Love Data" body="I relish helping organisations find meaning in their data. Experienced with Snowplow, Hotjar, Google Analytics and Looker. Frequent user of BigQuery, PostgreSQL and Cassandra." photo="data.jpg" />
        <Card title="Teacher" subTitle="Born Educator" body="Great communication and listening skills. I've created and led an Academy programme within an organisation and I'm a former Lecturer in Software Engineering and Games Programming." photo="teacher.jpg" alt="true" />
        <Card title="Learner" subTitle="Always Reading" body="I believe we never stop learning and I'm always keen to pick up new skills and knowledge. I'm currently studying Data Science, Technology &amp; Innovation MSc at The University of Edinburgh." photo="learner.jpg" alt="true"/>
        <Card title="Car Enthusiast" subTitle="Proud Subaru BRZ Owner" body="I'm a self-professed car nut. From heading to Goodwood Festival of Speed to taking my car on long country drives, I enjoy all things automotive 🏎️." photo="brz.jpg" />
        <Card title="Lean" subTitle="Advocate" body="I love a Lean process. I like to get things done and deliver. My approach is heavily influenced by Single Piece Flow, The Toyota Production System, Kanban and Kaizen" photo="lean.jpg" />
        <Card title="Public Speaking" subTitle="Confident" body="Delivered number of successful talks at conferences across the UK, including Agile on the Beach, Agile Cambridge &amp; NorDevCon." photo="speaking.jpg" alt="true"/>
        <Card title="Traveller" subTitle="Frequent Flyer" body="I enjoy travelling, whether around the UK or abroad, I'm always eager to visit new places. I recently returned from Dubai and before that Las Vegas 🤫." photo="traveller.jpg" alt="true"/>
    </div>
)