import React, { Component } from 'react';
import List from "../Components/List";
import Intro from  "../Components/Intro";


class Home extends Component {

    constructor(props) {
		super(props);

		this.state = {
			selectedLocations: []
		};	
    }

    handleOnChange = (childselectedLocations) => {
        this.setState({selectedLocations: childselectedLocations})
    }

  render() {
      return (
          <div className="Home" >
              <Intro updateParent={this.handleOnChange}/>
              <List {...this.state}/>
          </div>
      );
  }
}
export default Home;
