import React, {Component} from 'react';
import {Table} from "reactstrap";

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = { person: [] };
    }

    componentDidMount() {
        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/person/group/' + this.props.slug)
            .then(response => response.json())
            .then(data => this.setState({ person: data }))
        ;
    }

    render() {

        let person = <tbody><tr><td>Chargement en cours</td></tr></tbody>;

        if (this.state.person.length > 0) {
            person = this.state.person.map(person =>

                <tbody key={person.id}>
                <tr>
                    <th scope="row">{person.id}</th>
                    <td>{person.firstname + ' ' + person.lastname}</td>
                    <td>{person.expense.length}</td>
                    <td>{person.expense.reduce((accumulator, expense) => accumulator + parseFloat(expense.amount), 0)}</td>
                </tr>
                </tbody>

            );
        }

        return (
            <React.Fragment>
                {console.log(this.props.match)}
                <h1>Personnes</h1>
                <Table hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Dépenses</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    {person}
                </Table>
            </React.Fragment>
        );
    }
}

export default Person;