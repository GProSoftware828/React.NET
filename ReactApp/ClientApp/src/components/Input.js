﻿import React, { Component } from 'react';
import '../index.css';

export class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }

        this.reset = this.reset.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    reset() {
        this.setState({
            value: ''
        })
    }

    handleChange({ target }) {
        this.setState({
            value: target.value,
        })
    }

    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            )
    }
}

export default Input;
