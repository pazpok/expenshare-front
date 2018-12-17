import React, {Component} from 'react';
import {Col, Row} from "reactstrap";

class Debt extends Component {

    constructor(props) {
        super(props);
        this.state = {debt: []};
    }

    componentDidMount() {
        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/debt', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({debt: data}))
    }

    render() {

        let debt = <div>Chargement en cours</div>;

        if (this.state.debt.length > 0) {
            debt = this.state.debt.map(debt => <Col key={debt.id}>{debt.amount + ' : ' + debt.paid}</Col>);
        }

        return (
            <React.Fragment>
                <h1>Dépenses</h1>
                <Row>
                    {console.log(this.state.debt)}
                </Row>
            </React.Fragment>
        );
    }
}

export default Debt;