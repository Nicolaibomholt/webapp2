import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardColumns,
    CardSubtitle, CardBody,
  } from 'reactstrap';
import Legeplads from '../Images/legeplads.jpg';
import Taxa from '../Images/taxa.jpg';
import Svhal from '../Images/svhal.jpg';


class SuggestedProjects extends Component {

 
  render() {
    return (
        <div className="SuggestedProjects" >
            <div className="Intro" >
            
            </div>

            <div className="List">
                <div>
                    <h3>Liste af foreslåede projekter:</h3>

                    <CardColumns>
                    <Card>
                        <div className="Crop">
                            <CardImg top width="100%" src={Svhal} alt="Card image cap" />
                        </div>                    
                        <CardBody>
                            <CardTitle>Nye redskaber til Svømmehallen</CardTitle>
                            <br/>
                            <CardSubtitle>50 stemmer ud af 100</CardSubtitle>
                            <br/>
                            <Button >Stem for</Button>
                        </CardBody>
                    </Card>

                    <Card>
                            <div className="Crop">
                                <CardImg top width="100%" src={Legeplads} alt="Card image cap" />
                            </div>                        
                            <CardBody>
                            <CardTitle>Ny legeplads i parken ved Grønlykke Alle</CardTitle>
                            <br/>
                            <CardSubtitle>26 stemmer ud af 100</CardSubtitle>
                            <br/>
                            <Button>Stem for</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <div className="Crop">
                            <CardImg top width="100%" src={Taxa} alt="Card image cap" />
                        </div>
                        <CardBody>
                            <CardTitle>Lav taxa-holdeplader om til p-pladser</CardTitle>
                            <br/>
                            <CardSubtitle>75 stemmer ud af 100</CardSubtitle>
                            <br/>
                            <Button >Stem for</Button>
                        </CardBody>
                    </Card>                 
                    </CardColumns>
                </div>
            </div>

        </div>
    );
  }
}
export default SuggestedProjects;
