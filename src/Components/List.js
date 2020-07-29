import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody, Col, Row
  } from 'reactstrap';
import * as firebase from 'firebase';
import Legeplads from '../Images/legeplads.jpg';
import Taxa from '../Images/taxa.jpg';
import Bus from '../Images/bus.jpg';
import Gymnastik from '../Images/gymnastik_1.jpg';
import Affald from '../Images/affald.jpg';
import Asfalt from '../Images/Asfalt-3.jpg';
import Medborger from '../Images/medbroger.jpg';
import Svhal from '../Images/svhal.jpg';
import Plejehjem from '../Images/Plejehjem.jpg';


 
class List extends Component {
    

    constructor() {
        super();
        this.rootRef = firebase.database().ref().child('Users/');
        this.locationRef = this.rootRef.child('06007C4CE8/data');
        this.state = {
          userName: 'Nicolai', 
          specificLocation1: 0,
          specificLocation2: 0,
          specificLocation3: 0,
          specificLocation4: 0,
          specificLocation5: 0,
          specificLocation6: 0,
          show1: true,
          show2: true,
          show3: true,
          show4: true,
          show5: true,
          show6: true,

        };
    }
    

    componentDidUpdate(prevProps) {
        const standardArray = ['1', '2', '3', '4', '5', '6'];
        let tempArray = [];
        
        
       if(this.props.selectedLocations !== prevProps.selectedLocations && this.props.selectedLocations.length > 0 ) {
        this.setState({changeDetected: true});
        standardArray.forEach(element => {
            if(!this.props.selectedLocations.includes(element)){
                tempArray.push(element);
            }
        });
        
        
        //console.log(this.props.selectedLocations);
        this.props.selectedLocations.forEach(element => {
            this.setState({['show'+element]: true})
        });
        tempArray.forEach(elementnew => {
            this.setState({['show'+elementnew]: false})
        });

       }
       else if(this.props.selectedLocations !== prevProps.selectedLocations) {
           
        this.setState({
            show1: true,
            show2: true,
            show3: true,
            show4: true,
            show5: true,
            show6: true, 
            changeDetected: false,
            locationChosen: 0
        }) 
       }
        
    }

     

  render() { 
        
      return (
          <div className="List" >
            <h3>Projekter til afstemmelse</h3>
            <CardColumns>
                {this.state.show1 == true &&
                    <Card>
                        <div className="Crop">
                        <CardImg top width="100%" src={Legeplads} alt="Card image cap" />

                        </div>
                        <CardBody>
                            <CardTitle>Ny legeplads i parken ved Grønlykke Alle</CardTitle>
                            <br/>
                            <CardSubtitle>Dette projekt har optjent: 300point</CardSubtitle>
                            <br/>
                            <Button href="/projekt">Stem</Button>
                        </CardBody>
                    </Card>
                }
                 
                 {this.state.show2 == true &&
                    <Card>
                        <div className="Crop">
                        <CardImg top width="100%" src={Taxa} alt="Card image cap" />
                        </div>
                        <CardBody>
                            <CardTitle>Lav taxa-holdeplader om til p-pladser</CardTitle>
                            <br/>
                            <CardSubtitle>Dette projekt har optjent: 500point</CardSubtitle>
                            <br/>
                            <Button href="/projekt">Stem</Button>
                        </CardBody>
                    </Card>
                }
                {this.state.show3 == true &&
                    <Card>
                    <div className="Crop">
                        <CardImg top width="100%" src={Bus} alt="Card image cap" />
                    </div>
                    <CardBody>
                        <CardTitle>Indfør gratis offentlig transport til Aarhus C</CardTitle>
                        <br/>
                        <CardSubtitle>Dette projekt har optjent: 200point</CardSubtitle>
                        <br/>
                        <Button href="/projekt">Stem</Button>
                    </CardBody>
                </Card>
                }
                {this.state.show4 == true &&
                    <Card>
                    <div className="Crop">
                        <CardImg top width="100%" src={Svhal} alt="Card image cap" />
                    </div>                    
                    <CardBody>
                        <CardTitle>Nye redskaber til Svømmehallen</CardTitle>
                        <br/>
                        <CardSubtitle>Dette projekt har optjent: 100point</CardSubtitle>
                        <br/>
                        <Button href="/projekt">Stem</Button>
                    </CardBody>
                </Card>
                }
                {this.state.show5 == true &&
                    <Card>
                    <div className="Crop">
                        <CardImg top width="100%" src={Plejehjem} alt="Card image cap" />
                    </div>
                    <CardBody>
                        <CardTitle>Bedre forhold til plejehjemmet</CardTitle>
                        <br/>
                        <CardSubtitle>Dette projekt har optjent: 300point</CardSubtitle>
                        <br/>
                        <Button href="/projekt">Stem</Button>
                    </CardBody>
                </Card>
                }
                {this.state.show6 == true &&
                    <Card>
                        <div className="Crop">
                        <CardImg top width="100%" src={Gymnastik} alt="Card image cap" />
                        </div>                     
                        <CardBody>
                        <CardTitle>Renovering af den lokale gymnastiksal</CardTitle>
                        <br/>
                        <CardSubtitle>Dette projekt har optjent: 400point</CardSubtitle>
                        <br/>
                        <Button href="/projekt">Stem</Button>
                    </CardBody>
                </Card>
                }

{this.state.show6 == true &&
                    <Card>
                        <div className="Crop">
                        <CardImg top width="100%" src={Asfalt} alt="Card image cap" />

                        </div>
                        <CardBody>
                            <CardTitle>Forbedring af vejkvaliteten i tranbjerg</CardTitle>
                            <br/>
                            <CardSubtitle>Dette projekt har optjent: 700point</CardSubtitle>
                            <br/>
                            <Button href="/projekt">Stem</Button>
                        </CardBody>
                    </Card>
                }
                 
                 {this.state.show5 == true &&
                    <Card>
                        <div className="Crop">
                        <CardImg top width="100%" src={Affald} alt="Card image cap" />
                        </div>
                        <CardBody>
                            <CardTitle>Flere sorterings muligheder i Tranbjerg og omegn</CardTitle>
                            <br/>
                            <CardSubtitle>Dette projekt har optjent: 600point</CardSubtitle>
                            <br/>
                            <Button href="/projekt">Stem</Button>
                        </CardBody>
                    </Card>
                }
                {this.state.show4 == true &&
                    <Card>
                    <div className="Crop">
                        <CardImg top width="100%" src={Medborger} alt="Card image cap" />
                    </div>
                    <CardBody>
                        <CardTitle>Nytænkning af medborgerhuset</CardTitle>
                        <br/>
                        <CardSubtitle>Dette projekt har optjent: 800point</CardSubtitle>
                        <br/>
                        <Button href="/projekt">Stem</Button>
                    </CardBody>
                </Card>
                }
             
                
              </CardColumns>
          </div>
      );
  }
}
export default List;