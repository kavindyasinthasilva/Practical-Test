import React, { Component } from 'react';
import {Button, Col, Container, Form, Row,Alert} from "react-bootstrap";
import axios from 'axios';



import cookie from 'react-cookies'



import logo from '../Image/ompbio.png';


export default class login extends Component {


      constructor(props){

          super(props);


        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            useremail: '',
            userpassword: '',
            error:''
           

        }
    }

    onChangeUserEmail(e)

    {

      this.setState({
        useremail: e.target.value
    });


    }
        onChangeUserPassword(e) {
            this.setState({
                userpassword: e.target.value
            });
        }







        onSubmit(e) {
            e.preventDefault();
        
            axios.post('http://localhost/api/login.php?email='+this.state.useremail+'&password='+this.state.userpassword)
              .then(res => {
                const message = res.data.message;

                this.setState({ 
                    error:res.data.message
                    })
                    alert(message);




                
              
    
                if(message === 'ok') {

                     cookie.save('userEmail', this.state.useremail, { path: '/' });
                    cookie.save('userPassword', this.state.userpassword, { path: '/' });

                    
                    cookie.save('userId',this.state.useremail, { path: '/' })

                    window.location = '/home';
                    
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
  <Form.Group controlId="formBasicCheckbox">
   
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>


</Form>
    
<a href="/registation" >
  Registration
  </a>
    
    
    
    </Col>











    
  </Row>
</Container>
                
            </div>
        )
    }
}
