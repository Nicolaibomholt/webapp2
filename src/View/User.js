import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardColumns,
    CardSubtitle, CardBody, Col, Row
  } from 'reactstrap';
  import { ReactComponent as Logo } from '../Images/checkin_1-02.svg';

import * as firebase from 'firebase';
import CountUp from 'react-countup';
import Chart from "react-apexcharts";
import Legeplads from '../Images/legeplads.jpg';
import Taxa from '../Images/taxa.jpg';
import Svhal from '../Images/svhal.jpg';


class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: 0,
            series: [{
                name: "Points",
                data: []
            }],
            options: {
              chart: {
                height: 400,
                type: 'area',
                zoom: {
                  enabled: false
                },
                foreColor: "#ccc",
                toolbar: {
                  autoSelected: "pan",
                  show: false
                }
                
              },
              grid: {
                borderColor: "#555",
                clipMarkers: false,
                yaxis: {
                  lines: {
                    show: false
                  }
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: 7,
                curve: 'smooth'
              },
              fill: {
                type: "gradient",
                gradient: {
                  shadeIntensity: 1,
                  opacityFrom: 0.7,
                  opacityTo: 1,
                  stops: [0, 90, 100]
                }
              },
              colors: ["#93B7BE"],
              markers: {
                size: 5,
                colors: ["#ffffff"],
                strokeColor: "#8155A6s",
                strokeWidth: 3
              },
            
              xaxis: {
                categories: ['Jan 11', 'Jan 15', 'Jan 20' , 'Jan 24' , 'Jan 30' , 'Feb 3' , 'Feb 5' , 'Feb 18'],
              }
              
            },
          
        };
        

    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('Users');
        const locationRef = rootRef.child('8146152/data');
        let locationTemp = 0;
  
        locationRef.on('value', snap=>{
            console.log(snap.numChildren());
            locationTemp = 100 * snap.numChildren();
            this.setState({
                location: locationTemp,
                series: [{
                    data: [1200, 1000, 1100, 1200, 1300, 1400, 1500,  locationTemp]
                }]
            })
        });
      }

 
  render() {
    return (
        <div className="User" >
            <div className="Intro" >
                    

                <Row xs="2">
                    <Col>
                        <h2>Du har ialt:</h2>
                        <br/>
                        <h1><b>
                            <CountUp
                            end= {this.state.location} 
                            duration= {1}
                            /> Points
                            </b>
                        </h1>
                    </Col>
                    <Col>
                    
                        <Logo style={{height: '300px'}}/>

                    </Col>
                </Row>
            

            </div>

            <div className="List">
                <div>
                    <h3>Point over tid:</h3>

                    <div className="chart">
                        <Chart options={this.state.options} series={this.state.series} type="area" height={350} />
                    </div>
                </div>

                <div>
                    <h3>Du har stemt på følgende projekter indtil videre:</h3>

                    <CardColumns>
                    <Card>
                            <div className="Crop">
                                <CardImg top width="100%" src={Legeplads} alt="Card image cap" />
                            </div>                        
                            <CardBody>
                            <CardTitle>Ny legeplads i parken ved Grønlykke Alle</CardTitle>
                            <br/>
                            <CardSubtitle>Dette projekt har optjent: 10000point</CardSubtitle>
                            <br/>
                            <Button href="/projekt">Vis</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <div className="Crop">
                            <CardImg top width="100%" src={Taxa} alt="Card image cap" />
                        </div>
                        <CardBody>
                            <CardTitle>Lav taxa-holdeplader om til p-pladser</CardTitle>
                            <br/>
                            <CardSubtitle>Dette projekt har optjent: 100point</CardSubtitle>
                            <br/>
                            <Button href="/projekt">Vis</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <div className="Crop">
                            <CardImg top width="100%" src={Svhal} alt="Card image cap" />
                        </div>                    
                        <CardBody>
                            <CardTitle>Nye redskaber til Svømmehallen</CardTitle>
                            <br/>
                            <CardSubtitle>Dette projekt har optjent: 600point</CardSubtitle>
                            <br/>
                            <Button >Vis</Button>
                        </CardBody>
                    </Card>
                    
                    </CardColumns>
                </div>
            </div>

        </div>
    );
  }
}
export default User;
