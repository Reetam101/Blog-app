import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const [error, setError] = useState(null)

  const handleChange = (e) => {
    // e.preventDefault()
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("/auth/register", inputs)
      navigate("/login")
    } catch (err) {
      setError(err.response.data)
    }
  }


  return (
    <Container className='mt-5'>
      <Row>
        <Col className='p-5 d-flex flex-column justify-content-center align-items-center' lg={12}>

          <Card style={{ width: '20rem' }}>
            <Card.Header>Register</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Username</Form.Label>
                  <Form.Control name="username" onChange={handleChange} type="text" placeholder="john doe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control name="email" onChange={handleChange} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" onChange={handleChange} type="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                  <Button onClick={handleSubmit} variant="primary">Register</Button>

                </Form.Group>
                {error && <Alert variant='danger'>{error}</Alert>}

                <p className='text-muted'>Already have an account ? <Link to="/login">Login</Link></p>
              </Form>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Register