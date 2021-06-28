import React, { Component } from 'react';
import {Button, Col, Container, Form, Row,Alert} from "react-bootstrap";
import axios from 'axios';

import Cookies from 'js-cookie';
import queryString from 'query-string'


export default class update extends Component {


    constructor(props){

        super(props);

        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);

        const query = new URLSearchParams(this.props.location.search);
        const token = query.get('id');
        const sky = query.get('sky')
         alert(token +sky) ;

         this.state = {
            useremail: sky,
          
           

        }
    }

        onChangeUserEmail(e){
            this.setState({
                useremail: e.target.value
            });
        }





    render() {




        return (
            <div>
                




                <Form>

                <Form.Group controlId="formBasicEmail">



<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" value={this.state.useremail} onChange={this.onChangeUserEmail} required/>
<Form.Text className="text-muted">
  We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" required/>
</Form.Group>

<Form.Group controlId="formBasicusername">
<Form.Label>Username</Form.Label>
<Form.Control type="text" placeholder="Username"  required/>
</Form.Group>


<Form.Group controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">

Registration
</Button>


</Form>






            </div>
        )
    }
}
