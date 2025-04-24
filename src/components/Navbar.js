import React from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';

function TopNavbar() {
  return (
    <Navbar bg="lightblue" expand="lg">
      <Container fluid>
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text color=''>
            {/* <Image src="profile-image-url" roundedCircle width={30} />{' '} */}
            <big>Administrator</big>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
