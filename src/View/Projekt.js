import React, { Component } from 'react';
import MySlider from  "../Components/MySlider";
import Legeplads from '../Images/legeplads.jpg';
import { Col, Row} from 'reactstrap';
import Chart from "react-apexcharts";


class Projekt extends Component {

    constructor(props) {
		super(props);

		this.state = {
            selectedLocations: [],
            series: [70],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  startAngle: -180,
                  endAngle: 225,
                   hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                      enabled: true,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24
                    }
                  },
                  track: {
                    background: '#fff',
                    strokeWidth: '60%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                      enabled: true,
                      top: -3,
                      left: 0,
                      blur: 4,
                      opacity: 0.35
                    }
                  },
              
                  dataLabels: {
                    show: true,
                    name: {
                      offsetY: -10,
                      show: true,
                      color: '#888',
                      fontSize: '17px'
                    },
                    value: {
                      formatter: function(val) {
                        return 100 * parseInt(val)+' point';
                      },
                      color: '#111',
                      fontSize: '36px',
                      show: true,
                    }
                  }
                }
              },
              fill: {
                colors: '#93B7BE',
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  type: 'horizontal',
                  shadeIntensity: 0.5,
                  gradientToColors: ['#C9EDEF'],
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100]
                }
              },
              stroke: {
                lineCap: 'round'
              },
              labels: ['Stemmer', 'ud af'],
            },
          
          
          };
	
    }

    handleOnChange = (childselectedLocations) => {
        this.setState({selectedLocations: childselectedLocations})
    }

  render() {
      return (
          <div className="Projekt" >
            <div className="Intro"  >
            </div>
            <div className="ProjektContent" >
                
                <Row xs="2">
                    <Col className="text">
                        <h3>Ny legeplads i parken ved Grønlykke Alle</h3>
                        <br/>
                        <p>
                        Pladsen har stået ubrugt og trist hen i en årrække, og blandt andet været cykelkirkegård for stjålne cykler.
                        Pladsen er ca. 600 m2 stor og grænser op til to veje. De to øvrige sider af pladsen er indkranset af et grønt hegn, og grænser op til et villakvarter.
                        Vi foreslår en ny børnevenlig legeplads, hvor børnefamilier kan samles. 
                        </p>
                        <br></br>
                        <h5>Dette projekt skal opnå 10.000 point</h5>

                    </Col>
                    <Col>    
                        <img src={Legeplads} style={{height: 'auto', width:'100%'}}/>
                    </Col>
                </Row>

            </div>

            <Row xs="2">
                    <Col>                        
                        <MySlider/>
                    </Col>
                    <Col>    
                        <Chart options={this.state.options} series={this.state.series} type="radialBar" height={300} />
                    </Col>
                </Row>



          </div>
      );
  }
}
export default Projekt;
