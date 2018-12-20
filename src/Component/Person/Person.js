import React, {Component} from 'react';
import {Button, Table} from "reactstrap";
import {NavLink, Route} from "react-router-dom";
import Form from "./Form";

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = { person: [], personid:"" };
    }

    handleNewPerson(person) {
        let persons = this.state.person;
        persons.push(person);
        this.setState({ person: persons });
    }

    handleDeletePerson(e, id) {
        e.preventDefault(e);
        let persons = this.state.person;
        persons = persons.filter(person => person.id !== id);
        this.setState({ person: persons});

        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/person/', {
            method: 'DELETE',
            body: JSON.stringify({ person: id })
        })
            .then(response => response.json())
            .then(data => id, alert('Personne supprimée !'))
            .catch(err => alert('Erreur lors de la suppression de la personne'))
        ;

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
                    <td><Button color="danger" onClick={e => this.handleDeletePerson(e, person.id)} >Supprimer</Button></td>
                </tr>
                </tbody>

            );
        }

        return (
            <React.Fragment>
                {console.log(this.state.personid)}
                <h1>Personnes</h1>
                <NavLink to={this.props.match.url + '/add'}>Ajouter une personne</NavLink>
                <Route path={this.props.match.url + '/add'} render={props => <Form {...props} callBack={this.handleNewPerson.bind(this)} slug={this.props.slug}/>}/>
                <Table hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Dépenses</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    {person}
                </Table>
            </React.Fragment>
        );
    }
}

export default Person;