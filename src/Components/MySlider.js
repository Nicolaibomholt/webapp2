import React, { Component } from "react";

import PropTypes from 'prop-types';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import * as firebase from 'firebase';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Col, Row
} from 'reactstrap';




  
  function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  
  
  const PrettoSlider = withStyles({
    root: {
      color: '#93B7BE',
      height: 8,
    },
    thumb: {
      height: 30,
      width: 30,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 10px)',
    },
    track: {
      height: 15,
      borderRadius: 4,
    },
    rail: {
      height: 15,
      borderRadius: 4,
    },
  })(Slider);
  

 

export default class MySlider extends Component {

  constructor() {
    super();
    this.rootRef = firebase.database().ref().child('Users');
    this.locationRef = this.rootRef.child('8146152/data');
    this.state = {
      locationPoints: 0,
      deleteVal: 0,
      realVal: 0,
      detailedValue: 0,
      halfedValue: 0
    }
  }

  componentDidMount() {
    let locationTemp = 0;
    let halfedTemp  = 0;
        this.locationRef.on('value', snap=>{
            locationTemp = 100 * snap.numChildren();
            halfedTemp = locationTemp/2
            this.setState({
                locationPoints: locationTemp,
                halfedValue: halfedTemp
            })
        });
        
  }
   // const classes = useStyles();
   handleChange = (event, value) => {
    console.log(value);
    var reactValeu = value/100;
    this.setState({
      deleteVal: reactValeu,
      realVal: value
    });
    console.log(reactValeu);   
    }

    detailedChange = (event, value) => {
      this.setState({
        detailedValue: value
      })
    }

    onBtnClick = () => {

      var rootRefte = firebase.database().ref().child('Users');
      var locationRefte = rootRefte.child('8146152/data');
      var query = locationRefte.startAt().limitToFirst(this.state.deleteVal);
      
      query.once("value")
      .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        locationRefte.child(childSnapshot.key).remove();

      });
     
      
    });
    
   

           
    }
    render() {
   
        return (
            <div className="mySlider">
            <h3>Vælg hvor mange point du vil bruge</h3>
            <PrettoSlider onChange ={(event, value) => this.detailedChange(event, value)}  onChangeCommitted ={(event, value) => this.handleChange(event, value)} className="sliderComponent" valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={0} step= {100} max = {this.state.locationPoints} />
            <h3><b>{this.state.detailedValue}</b> point</h3>
            <Button className="btn-secondary" onClick ={this.onBtnClick} href ="/user">Stem</Button>
          </div>
        );
        }
  }