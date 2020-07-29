import React, { Component } from "react";
import {Col, Row} from 'reactstrap';
import Aarhus from '../Images/Aarhus.png'


export default class Footer extends Component {
   
    
    render() {
        return (
            <div className="Footer" >
                
                <Row xs="1">
                    <Col>
                        <img style={{height: '100px'}}src={Aarhus} alt="Aarhus"/>
                    </Col>
                </Row>
  
            </div>
        );
    }
  }
