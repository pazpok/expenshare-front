import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Container} from "reactstrap";
import Menu from "./Component/Menu";
import Person from "./Component/Person";
import {Route} from "react-router-dom";
import Expense from "./Component/Expense";
import ShareGroup from "./Component/ShareGroup";

class App extends Component {
    render() {

        return (
            <Container>
                <Menu/>
                <Route exact path="/person" component={Person}/>
                <Route exact path="/expense" component={Expense}/>
                <Route exact path="/sharegroup" component={ShareGroup}/>
            </Container>
        );
    }
}

export default App;
