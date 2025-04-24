import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Profile() {
  const [username, setUsername] = useState('Prathik Vinodkumar Kurup');
  const [email, setEmail] = useState('prathik.kurup@gmail.com');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdateProfile = () => {
    // Handle profile update logic here
    alert('Profile updated successfully!');
  };

  return (
    <Container >
      <h2 className="my-4">Profile</h2>
      <h4>Edit Profile</h4>
      <Form style={{justifyContent:'space-between'}}>
        <Form.Group as={Row} controlId="formUsername">
          <Form.Label column sm={2}>
            Username
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formEmail">
          <Form.Label column sm={2}>
            Email Address
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              You'll use this email address to log in next time!
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formOldPassword">
          <Form.Label column sm={2}>
            Old Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formNewPassword">
          <Form.Label column sm={2}>
            New Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Leave Blank to keep same Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Button
          variant="success"
          onClick={handleUpdateProfile}
          className="mt-3"
        >
          Update Profile
        </Button>
      </Form>
    </Container>
  );
}

export default Profile;
