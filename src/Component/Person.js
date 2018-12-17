import React, {Component} from 'react';
import {Col} from "reactstrap";


class Person extends Component {
    constructor(props) {
        super(props);
        this.state = { person: [] };
    }

    componentDidMount() {
        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/person', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({person: data}))
    }

    render() {

        let person = <div>Chargement en cours</div>;

        if (this.state.person.length > 0) {
            person = this.state.person.map(person => <Col key={person.id}>{person.firstname + ' ' + person.lastname} Groupe : {person.shareGroup.slug}</Col>);
        }

        return (
            <React.Fragment>
                    <h1>Personnes</h1>
                        {person}
            </React.Fragment>
        );
    }
}

export default Person;