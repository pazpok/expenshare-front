import React, {Component} from 'react';

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = { category: [] }
    }

    componentDidMount() {
        fetch('http://127.0.0.1/dcdev/CoursDC/Module4/expenshare/expenshare-back/public/category', {
            method:'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({category: data}))
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Category;