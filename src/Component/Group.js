import React, {Component} from 'react';
import Menu from "./Menu";
import {Route} from "react-router-dom";
import Expense from "./Expense/Expense";
import Dashboard from "./Dashboard/Dashboard";
import Person from "./Person/Person";

class Group extends Component {
    render() {
        return (
            <React.Fragment>
            <Menu url={this.props.match.url}/>
                <Route exact path={this.props.match.url} component={Dashboard}/>
                <Route exact path={this.props.match.url + "/expense"} render={props => <Expense {...props} slug={this.props.match.params.slug}/>}/>
                <Route exact path={this.props.match.url + "/person"} render={props => <Person {...props} slug={this.props.match.params.slug}/>}/>
            </React.Fragment>
        );
    }
}

export default Group;