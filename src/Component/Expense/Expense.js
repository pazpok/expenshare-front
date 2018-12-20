import React, {Component} from 'react';
import {Table, Button} from "reactstrap";
import {NavLink, Route} from "react-router-dom";
import Form from "./Form";
import moment from "moment";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faHotel, faUtensils, faRunning, faVideo, faWineBottle } from '@fortawesome/free-solid-svg-icons';

library.add(faCar, faHotel, faUtensils, faRunning, faVideo, faWineBottle);

class Expense extends Component {
    constructor(props) {
        super(props);
        this.state = {expense: [], expenseid: ""};
    }

    handleDeleteExpense(e, id) {
        e.preventDefault(e);
        let expenses = this.state.expense;
        expenses = expenses.filter(expense => expense.id !== id);
        this.setState({ expense: expenses});

        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/expense/', {
            method: 'DELETE',
            body: JSON.stringify({ expense: id })
        })
            .then(response => response.json())
            .then(data => id, alert('Dépense supprimée !'))
            .catch(err => alert('Erreur lors de la suppression de la dépense'))
        ;

    }

    componentDidMount() {
        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/expense/group/' + this.props.slug)
            .then(response => response.json())
            .then(data => this.setState({
                expense: data,
            }))
    }

    render() {

        let expense = <tbody><tr><td>Chargement en cours</td></tr></tbody>;

        if (this.state.expense.length > 0) {
            expense = this.state.expense.map(expense =>

                <tbody key={expense.id}>
                <tr>
                    <th scope="row">{expense.id}</th>
                    <td>{expense.person.firstname + ' ' + expense.person.lastname}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.title}</td>
                    <td>{expense.category.label}</td>
                    <td><FontAwesomeIcon icon={expense.category.icon} /></td>
                    <td>{moment(expense.createdAt).format("D/M/Y")}</td>
                    <td><Button color="danger" onClick={e => this.handleDeleteExpense(e, expense.id)} >Supprimer</Button></td>

                </tr>
                </tbody>
            );
        }

        return (
            <React.Fragment>
                <h1>Dépenses</h1>
                <NavLink to={this.props.match.url + '/add'}>Ajouter une dépense</NavLink>
                <Route path={this.props.match.url + '/add'} render={props => <Form {...props} slug={this.props.slug}/>}/>
                <Table hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Dépense</th>
                        <th>Description</th>
                        <th>Catégorie</th>
                        <th>Icone</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    {expense}
                </Table>
            </React.Fragment>

        );
    }
}

export default Expense;