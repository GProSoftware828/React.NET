import React from 'react';
import Form from 'react-jsonschema-form';
import '../index.css';

const schema = {
    type: 'object',
    properties: {
        'Favorite Actress First Name': { type: 'string', default: 'Pete' },
        'Favorite Actress Last Name': {type: 'string', default: 'Petes'},
    },
}

class JSONSchemaForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit({ formData }) {
        console.log(formData)
    }

    render() {
        return (
            <Form schema={schema} onSubmit={this.handleSubmit} className="item-margin" />
            )
    }
}

export default JSONSchemaForm;