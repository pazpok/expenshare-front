import React, {Component} from 'react';
import {Col} from "reactstrap";


class ShareGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {sharegroup: []};
    }

    componentDidMount() {
        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/share_group', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({
                sharegroup: data,
            }))
    }

    render() {

        let sharegroup = <div>Chargement en cours</div>;

        if (this.state.sharegroup.length > 0) {
            sharegroup = this.state.sharegroup.map(sharegroup => <Col key={sharegroup.id}>{sharegroup.slug + ' : ' + sharegroup}</Col>);
        }

        return (
            <React.Fragment>
                <h1>Dépenses</h1>
                {sharegroup}
            </React.Fragment>
        );
    }
}

export default ShareGroup;