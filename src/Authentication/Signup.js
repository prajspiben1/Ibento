import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./Firebase";
import { Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Navbar } from 'react-bootstrap';
import '../Styles/login.css'

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);



  return (
    <div className="App">
    <Navbar className="Appname">Ibento</Navbar>
    <Card className="loginCard" style={{ margin: "25px" }}>
        <Card.Body>

          <h2 className="text-center mb-4 loginTitle">Sign Up</h2>

          <form onSubmit={handleSignUp}>
            <Form.Group id="email">
              <Form.Label className="emailPassword">Email</Form.Label>
              <Form.Control name="email" type="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="emailPassword">Password</Form.Label>
              <Form.Control name="password" type="password" required />
            </Form.Group>
            <br />
            <Button className="w-100" type="submit">
              Log In
            </Button>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Already Have An Account? Log In</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default withRouter(SignUp);