import React, { Component } from 'react';
import Home from "./View/Home";
import User from "./View/User";
import Projekt from "./View/Projekt";
import SuggestedProjects from "./View/SuggestedProjects";
import Proces from "./View/Proces";

import Footer from "./Components/Footer";

import TopBar from "./Components/TopBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems: []
        }
    }

    handleSelectedItemsChange = (newItems) => {
        this.setState({
            selectedItems: [...newItems]
        });
    }

  render() {
      return (
          <div className="App" >
              <div className="Content" style={{margin:'auto'}}>
                    <TopBar/>
                    <Router>
                        <Switch>
                            <Route path="/user">
                                <User />
                            </Route>
                            <Route path="/projekt">
                                <Projekt />
                            </Route>
                            <Route path="/foreslåedeprojeker">
                                <SuggestedProjects />
                            </Route>
                            <Route path="/proces">
                                <Proces />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                            
                        </Switch>
                      </Router>  
         
              </div>
              <Footer/>

          </div>
      );
  }
}
export default App;
