import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Tab,
  Tabs,
  Col,
  Table,
  Button,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import { fetchDashboardList } from "../../store/dashboard/dashboardSlice";

function Products() {
  const dispatch = useDispatch();

  
  const [limit,setLimit] = useState(10)
  const [currentpage,setCurrentPage] = useState(0)

  useEffect(() => {
    dispatch(fetchDashboardList({limit,currentpage}));
  }, []);

  const { dashboardList,count } = useSelector((state) => state.dashboardSlice);
  console.log(dashboardList, "h",count);

  const headers = ["Image", "title", "Description", "Price"];
  const headersCategory = ["Image","category", "description"];

  return (
    <div style={{ marginLeft: "300px", marginTop: "30px" }}>
      <Card>
        <Card.Body>
 <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="ml-5"
      >
        <Tab eventKey="home" title="Products-List">

<Container>
<Row>
{dashboardList?.products?.map((item)=>(
  <Col xs={4}>
<Card style={{height:"150px"}}>

  <Card.Body>
  <img style={{width:"50px"}} src= {item.images[0]} alt="" srcset="" />
  <h5>{item.title}</h5>
  <p>{`${item.description.slice(0,25)}`}...</p>
  </Card.Body>
</Card>
</Col>
))}

</Row>
</Container>

          <div className="mt-5 me-5 float-end">
              <Pagination
                 itemsCount={count}
                itemsPerPage={limit}
                setCurrentPage={setCurrentPage}
              />
            </div>
        </Tab>
        <Tab eventKey="profile" title="Products-category">
         
        <Table striped bordered hover>
            <thead>
              <tr>
                {headersCategory.map((header, index) => (
                  <th key={index} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dashboardList?.products?.map((item)=>(
                <tr>
                <td>
                  <img style={{width:"50px"}} src= {item.images[0]} alt="" srcset="" />
                 </td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                
              </tr>
              ))}
              
            </tbody>
          </Table>


        </Tab>
      </Tabs>
     
        </Card.Body>
      </Card>
     
    </div>
  );
}

export default Products;
