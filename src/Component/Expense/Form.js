import React, {Component} from 'react';
import {Input} from "reactstrap";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {expense: []};
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ expense: event.target.value });
    }

    handleCreate(event) {
        event.preventDefault();
        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/expense/group/', {
            method: 'POST',
            body: JSON.stringify({ expense: this.state.expense })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Nouveau groupe créé avec succès !');
            })
            .catch(err => alert('Erreur lors de la création du groupe'))
        ;
    }

    render() {
        return (
            <div>
                <h3>Ajouter une dépense</h3>
                <Input type="text" onChange={e => this.handleChange(e)} placeholder="Ajouter une dépense"/>

            </div>
        );
    }
}

export default Form;