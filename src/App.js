import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Container} from "reactstrap";
import {Route} from "react-router-dom";
import Homepage from "./Component/Homepage";
import Group from "./Component/Group";

class App extends Component {
    render() {
        return (
            <Container>
                <Route exact path="/" component={Homepage}/>
                <Route path="/group/:slug" component={Group}/>
            </Container>
        );
    }
}

export default App;
