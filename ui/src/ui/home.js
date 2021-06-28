import React, { Component,useState, useEffect,Link } from 'react';


import {Button, Col, Container, Form, Row,Alert,Navbar,Nav,FormControl,Table} from "react-bootstrap";
import axios from 'axios';


import cookie from 'react-cookies'



import logo from '../Image/ompbio.png';

export default class home extends Component {


    


    constructor(props){

       

        super(props);


      this.state = {
          email: '',
          username: '',
          id:'',
          error:'',
          time:'',

          userData: []
         

      }
    }

      componentWillMount() {
        this.setState ({email: cookie.load('userEmail')});
        this.setState ({password: cookie.load('userPassword')});

        const email = cookie.load('userEmail');
        const password = cookie.load('userPassword');
        if(email === undefined || password === undefined) {
            window.location = '/';
        }
      }
    


      componentDidMount() {
        axios.get('http://localhost/api/home.php?email='+this.state.email+'&password='+this.state.password)
          .then(response => {
            this.setState({ 
                id: response.data.id,
                 email: response.data.email,
                username: response.data.username,
                time: response.data.time
             })
          })
          .catch((error) => {
            console.log(error);
          })

          fetch("http://localhost/api/alluser.php") // could be any rest get url
          .then(response => response.json())
          .then(result =>
            this.setState({
              userData: result
            })
          );
      }
      
     

      deleteProduct(productId) {

       

        axios.post('http://localhost/api/login.php?email='+productId)
        .then(res => {
          const message = res.data.message;

          this.setState({ 
              error:res.data.message
              })

          if(message === 'Login success') {


          
              window.location = '/home';
              
          }



        });





      
      }

   










    render() {



       
      
        
        return (
            <div >
<Container>






<Row>




<Col>

<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

</Col>



</Row>




  <Row className='sky'>
    <Col>
    
    
    <Table striped bordered hover>
  <thead>
    <tr>
    
      <th>Email</th>
      <th>Username</th>
      <th>time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
  
      <td>{this.state.email}</td>
      <td>{this.state.username}</td>
      <td>{this.state.time}</td>
    </tr>

  </tbody>
</Table>
   
    
    
    
    
    
    </Col>










    <Col >
    
    
    
    
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Email</th>
      <th>Time</th>
      <th>Username</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>

    {this.state.userData.map((data, key) => {
              return (
                <tr key={key}>
                
                  <td>{data.Email}</td>
                  <td>{data.time}</td>
                  <td>{data.username}</td>
                  <td><Button variant="danger" onClick={() => this.deleteProduct(data.Email)}>Delete</Button></td>
                 
                  

                  
                </tr>
              );
            })}

  
  
  </tbody>
</Table>
    
    
    
    
    
    
    
    
    
    </Col>







  </Row>
  <Row>


<Col  className='sky'>

<h1>Trainee Full Stack Developer - Practical Test</h1>

</Col>


  </Row>
 
</Container>
                
                
            </div>
        )
    }
}
