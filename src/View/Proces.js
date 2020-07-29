import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardColumns,
    CardSubtitle, CardBody,
  } from 'reactstrap';
import ProcesImg from '../Images/Road-map.png';



class Proces extends Component {

 
  render() {
    return (
        <div className="Proces" >
            <div className="Intro" >
            </div>
            <div className="Proces-Content">
                <h3>Her kan du se process for udviklingen</h3>
                <img src={ProcesImg} style={{width: '80%', height:'auto'}}/>
            </div>

        </div>
    );
  }
}
export default Proces;
