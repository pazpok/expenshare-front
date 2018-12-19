import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {Button, Container, Input} from "reactstrap";

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = { slug: "", sharegroup: null };
    }

    handleCreate(event) {
        event.preventDefault();
        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/expense/', {
            method: 'POST',
            body: JSON.stringify({ slug: this.state.slug })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Nouvelle dépense créé avec succès !');
            })
            .catch(err => alert('Erreur lors de la création de la dépense'))
        ;
    }

    handleOpen(event) {
        event.preventDefault();
        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/group/' + this.state.slug)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ sharegroup: JSON.parse(data) });
            })
            .catch(err => alert('Ce groupe n\'existe pas !'))
        ;
    }

    render() {

        if (this.state.sharegroup) {
            return <Redirect to={'/group/' + this.state.sharegroup.slug}/>
        }

        return (
            <Container className="App">

                <Input type="text" onChange={e => this.handleCreate(e)} placeholder="Ajouter une dépense"/>
                <Button color="primary" onClick={e => this.handleCreate(e)}>Creér</Button>
                <Button color="info" onClick={e => this.handleOpen(e)}>Ouvrir</Button>
            </Container>
        );
    }
}

export default Homepage;