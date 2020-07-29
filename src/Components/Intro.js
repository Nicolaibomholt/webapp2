import React, { Component } from "react";
import Map from "../Images/index"
import { CheckboxSVGMap } from "react-svg-map";
import {Col, Row } from 'reactstrap';
import "../Style/map.scss";
import { ReactComponent as Logo } from '../Images/checkin_1-01.svg';
import * as firebase from 'firebase';
import CountUp from 'react-countup';



export default class Intro extends Component {
   
    constructor(props) {
		super(props);
        this.rootRef = firebase.database().ref().child('Users');
        this.locationRef = this.rootRef.child('8146152/data');
        
		this.state = {
            selectedLocations: [],
            changeDetected: false,
            location: 0,
            locationChosen: 0,

		};
		this.handleOnChange = this.handleOnChange.bind(this);
    }
    
	handleOnChange(selectedNodes) {

		this.setState(prevState => {
			return {
                ...prevState,
                selectedLocations: selectedNodes.map(node => node.attributes.name.value)
            } 
        });
    }

    componentDidMount(){
        let locationTemp = 0;
        this.locationRef.on('value', snap=>{
            console.log(snap.numChildren());
            locationTemp = 100 * snap.numChildren();
            this.setState({
                location: locationTemp
            })
        });
    }

    componentDidUpdate(prevProps, prevState) {
        let count = 0;
        let chosenPoints = 0;
        let temparray2 = this.state.selectedLocations;

        if (this.state.selectedLocations !== prevState.selectedLocations) {
            this.props.updateParent(this.state.selectedLocations);
            if(this.state.selectedLocations.length > 0){
                this.setState({changeDetected: true});
            }
            else{
                this.setState({changeDetected: false});

            }

        }
        if(this.state.selectedLocations !== prevState.selectedLocations && this.state.selectedLocations.length > 0 ) {
            this.locationRef.on('value', snap => {
                snap.forEach(function(childNode){                       
                if(temparray2.includes(childNode.val().toString())){
                    count++;
                    chosenPoints = count * 100;         
                }     
                });
                this.setState({locationChosen: chosenPoints})         
            });
        }
    }
    

    render() {
        return (
            <div className="Intro" >              
                    <Col xs="6" className="intro-text">
                        <h1>Deltag i <b>TRANBJERG!</b> </h1>
                        <br/>
                        <p>
                            På denne side kan du se dit optjente anciennitet i alle seks områder af Tranbjerg.
                            Under hver bydel kan du se de forskellige ideer tilbudt. Du kan stemme og fjerne ideer med dine point.
                            Vær herre over dit område!
                        </p>
                        <div className="ListHeader">
                            {this.state.changeDetected == true &&
                                <Row xs="2">
                                    <Col className="pointText" xs="6">
                                        <h4>
                                        I det valgte område: 
                                        <br/>
                                        </h4>                                    
                                    </Col>
                                    <Col xs="6">
                                    
                                        <h3>
                                            <CountUp
                                            end= {this.state.locationChosen}
                                            duration={0.3}
                                            />
                                        </h3>                
                                    </Col>
                                </Row> 
                            }    
                            {this.state.changeDetected == false &&
                                <Row xs="2">
                                    <Col className="pointText" xs="6">
                                        <h4>
                                            Totalt optjent point: 
                                            <br/>
                                        </h4>
                                    </Col>
                                    <Col xs="6">
                                    
                                        
                                        <h3>
                                            <CountUp
                                            end= {this.state.location}
                                            duration={0.5}
                                            />
                                        </h3>   
                                    </Col>
                                </Row> 
                            }
                            
                        </div>  
                    </Col>
                    <Col xs="6">
                    <div className="Map">
                        <CheckboxSVGMap 
                            map={Map}  
                            onChange={this.handleOnChange} 
                        />
                    </div>
                    </Col>
               

            </div>
        );
    }
  }