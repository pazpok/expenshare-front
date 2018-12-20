import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {Button, Container, Input} from "reactstrap";

class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = { slug: "", sharegroup: null };
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({slug: event.target.value})
    }

    handleCreate(event) {
        event.preventDefault();
        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/sharegroup/', {
            method: 'POST',
            body: JSON.stringify({ slug: this.state.slug })
        })
            .then(response => response.json())
            .then(data => {
                alert('Nouvelle dépense créé avec succès !');
            })
            .catch(err => alert('Erreur lors de la création de la dépense'))
        ;
    }

    handleOpen(event) {
        event.preventDefault();
        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/sharegroup/' + this.state.slug)
            .then(response => response.json())
            .then(data => {
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
                <h1>Expenshare</h1>
                <h2>La gestion de vos dépenses plus facilement</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid commodi cumque deserunt ea enim laborum minima minus, non porro quod, suscipit totam. Dolor eius eveniet libero magnam nesciunt!</p>
                <Input type="text"  onChange={e => this.handleChange(e)} placeholder="Group ID"/>
                <br/>
                <Button color="primary" className="m-2" onClick={e => this.handleCreate(e)}>Creér</Button>
                <Button color="info" className="m-2" onClick={e => this.handleOpen(e)}>Ouvrir</Button>
            </Container>
        );
    }
}

export default Homepage;