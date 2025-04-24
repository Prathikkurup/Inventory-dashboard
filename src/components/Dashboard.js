import React from 'react';
import { Card, Row, Col, Table, Button, ProgressBar, ListGroup } from 'react-bootstrap';
import '../stylesheets/Card.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const navigate = useNavigate();

const handleButtonClick = () => {
  navigate('/preview');
};
const handleButtonClick2 = () => {
  navigate('/sms');
};
  return (
    <div className="p-4">
      {/* Metrics */}
      <Row className="mb-4">
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Visitors</Card.Title>
              <Card.Text>1,294</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Drugs Used</Card.Title>
              <Card.Text>11,345</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Subscribers</Card.Title>
              <Card.Text>1303</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Inventory remaining</Card.Title>
              <Card.Text>576</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Balance Section */}
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Order status</Card.Title>
              <Card.Text>
                <h2>Pending</h2>
              </Card.Text>
              <Button variant="primary" onClick={handleButtonClick}>+ New Order</Button>
              <Card.Text className="mt-2">History</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Send notification</Card.Title>
              <Card.Text>
                <h2>To Subscribers</h2>
              </Card.Text>
              <Button variant="primary">+ New Subscriber</Button>
              <Card.Text className="mt-2">Edit notification</Card.Text>
              <Button variant="primary " className='btn-success'  onClick={handleButtonClick2} >Send notification</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Progress</Card.Title>
              <div>
                <h6>Medicine 1</h6>
                <ProgressBar now={50} label="3K" />
              </div>
              <div className="mt-2">
                <h6>Medicine </h6>
                <ProgressBar now={50} label="576" />
              </div>
              <div className="mt-2">
                <h6>Medicine 3</h6>
                <ProgressBar now={70} label="70" />
              </div>
              <div className="mt-2">
                <h6>Medicine 4</h6>
                <ProgressBar now={60} label="60" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Users Table and Tasks */}
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Users Table</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
      
    </div>
 );
}


export default Dashboard;
