import React, { Component } from 'react';
import {Button, Col, Container, Form, Row,Alert} from "react-bootstrap";
import axios from 'axios';

import Cookies from 'js-cookie';



import logo from '../Image/ompbio.png';


export default class registation extends Component {


      constructor(props){

          super(props);


        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            useremail: '',
            userpassword: '',
            username:'',
            error:''
           

        }
    }

        onChangeUserEmail(e) {
            this.setState({
                useremail: e.target.value
            });
        }

        onChangeUserPassword(e) {
            this.setState({
                userpassword: e.target.value
            });
        }

        onChangeUsername(e)
        {


            this.setState({
                username: e.target.value
            });


        }







        onSubmit(e) {
            e.preventDefault();
        
            axios.post('http://localhost/api/registration.php?email='+this.state.useremail+'&password='+this.state.userpassword+'&username='+this.state.username)
              .then(res => {
                const message = res.data.message;

                this.setState({ 
                    error:res.data.message
                    })
                    alert(message);




                
              
    
                if(message === 'ok') {

    
                
                    window.location = '/';
                    
                }
              });
        }



    







    render() {
        return (
            <div>

<Container fluid="md" className="sky">
  <Row>
    <Col>
    
    
   
    
    
    <Form onSubmit={this.onSubmit}>

    <img src={logo} alt="logo" />

 


    <Alert variant="success">
  <Alert.Heading>{this.state.error}</Alert.Heading>
  <p>
   
  </p>
  <hr />
  <p className="mb-0">
  
  </p>
</Alert>

   


  
 






  <Form.Group controlId="formBasicEmail">




    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={this.state.useremail}  onChange={this.onChangeUserEmail} required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={this.state.userpassword} onChange={this.onChangeUserPassword} required/>
  </Form.Group>

  <Form.Group controlId="formBasicusername">
  <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={this.onChangeUsername} required/>
  </Form.Group>


  <Form.Group controlId="formBasicCheckbox">

  </Form.Group>
  <Button variant="primary" type="submit">
    
    Registration
  </Button>


</Form>
    
    

    
<a href="/login" >
  Login
  </a>
    
    </Col>











    
  </Row>
</Container>
                
            </div>
        )
    }
}
