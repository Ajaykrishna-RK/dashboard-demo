import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { CountUp } from "use-count-up";

import BarChart from "../../components/chart/BarChart";


function Dashboard() {
  

  const [userData,setUserData] = useState({
    labels:["2033","2323","4444","34343"],
    datasets:[{
      label:"users Gained",
      data:["93939","73737","328236","263626"]
    }],
  })

  return (
    <div>
      <Container>
        <Row style={{ marginLeft: "190px", marginTop: "50px" }}>
          <Col>
            <Card style={{ width: "18rem", backgroundColor: "brown" }}>
              <div></div>
              <img
                style={{
                  height: "100px",
                  width: "100px",
                  marginRight: "50px",
                  marginLeft: "90px",
                  borderRadius: "50px",
                }}
                src="https://blog.hubspot.com/hubfs/REAL%20SALES%20CYCLE%20%281%29.jpg"
                alt=""
                srcset=""
              />
              <Card.Body>
                <Card.Title style={{ color: "#fff" }}>Sales</Card.Title>

                <Card.Text style={{ color: "#fff" }}>
                  <CountUp isCounting end={1320} duration={3.2} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <div></div>
              <img
                style={{
                  height: "100px",
                  width: "100px",
                  marginRight: "50px",
                  marginLeft: "90px",
                  borderRadius: "50px",
                }}
                src="https://databox.com/wp-content/themes/databox/inc/img/templates/revenue.jpg"
                alt=""
                srcset=""
              />
              <Card.Body>
                <Card.Title>Revenue</Card.Title>

                <Card.Text>
                  <CountUp isCounting end={1320} duration={3.2} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" ,backgroundColor:"orangered"}}>
              <div></div>
              <img
                style={{
                  height: "100px",
                  width: "100px",
                  marginRight: "50px",
                  marginLeft: "90px",
                  borderRadius: "50px",
                }}
                src="https://www.freshbooks.com/wp-content/uploads/2022/02/expense-tracking.jpg"
                alt=""
                srcset=""
              />
              <Card.Body>
                <Card.Title>Expense</Card.Title>

                <Card.Text>
                  <CountUp isCounting end={1320} duration={3.2} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

<div style={{marginLeft:"400px",width:"600px",marginTop:"20px"}}>

<BarChart chartData={userData}/>
</div>

      

  
    </div>
  );
}

export default Dashboard;
