import Head from "next/head";
import "antd/dist/antd.css";
import styles from "../styles/Home.module.css";
import React from "react";
import { Row, Col, List, Typography, Divider } from "antd";

export default function Home() {
  const data = [
    {
      taskID: "96e3f6a743df",
      module: "CS2101",
      taskName: "Submission:User Guide",
      createdDate: "01-01-2021",
      startDate: "07-01-2021",
      endDate: "01-10-2021",
      completed: false,
    },
    {
      taskID: "11398fc370c4",
      module: "GEQ1000",
      taskName: "Quiz 1",
      createdDate: "01-01-2021",
      startDate: "07-01-2021",
      endDate: "01-11-2021",
      completed: false,
    },
    {
      taskID: "f3dfcf4c8391",
      module: "CS2102",
      taskName: "Submission: Web Application",
      createdDate: "01-01-2021",
      startDate: "07-01-2021",
      endDate: "01-12-2021",
      completed: false,
    },
    {
      taskID: "e6292bf1f178",
      module: "GEQ1000",
      taskName: "Quiz 2",
      createdDate: "01-01-2021",
      startDate: "010-01-2021",
      endDate: "01-17-2021",
      completed: false,
    },
    {
      taskID: "762c760172f8",
      module: "CS2103T",
      taskName: "Presentation",
      createdDate: "01-01-2021",
      startDate: "07-01-2021",
      endDate: "01-18-2021",
      completed: false,
    },

    {
      taskID: "99ec80cd0618",
      module: "GEQ1000",
      taskName: "Quiz 3",
      createdDate: "01-01-2021",
      startDate: "17-01-2021",
      endDate: "01-24-2021",
      completed: false,
    },
  ];
  const getLink = () => {
    fetch("http://localhost:3001/initiateTelebot")
      .then((res) => res.json())
      .then((data) => window.open(data.link, "_blank"));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to LumiNUS!</h1>
        <Row>
          <Col>
            <List
              header={<div>What's Due Soon?</div>}
              bordered
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark>
                    Due in{" "}
                    {Math.trunc(
                      (new Date(item.endDate).getTime() -
                        new Date().getTime()) /
                        1000 /
                        60 /
                        60 /
                        24
                    )}{" "}
                    days
                  </Typography.Text>{" "}
                  {item.module + " " + item.taskName}
                </List.Item>
              )}
            />
          </Col>
          <Col>
            <div className={styles.grid} onClick={getLink}>
              <a className={styles.card}>
                <h3>Integrate with telegram &rarr; </h3>
                <p>receive notifications when dues are getting closer</p>
              </a>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
}
