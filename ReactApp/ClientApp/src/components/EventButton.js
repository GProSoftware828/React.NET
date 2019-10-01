import React, { Component } from 'react';
import '../index.css';

export class EventButton extends Component {
    constructor(props) {
        super(props)
        this.handleEvent = this.handleEvent.bind(this)
    }

    handleEvent(event) {
        switch (event.type) {
            case 'click':
                console.log('clicked')
                break

            case 'dblclick':
                console.log('double clicked')
                break

            default: 
                console.log('unhandled', event.type)
        }
    }

    render() {
        return (
            <button onClick={this.handleEvent} onDoubleClick={this.handleEvent}>Submit Event</button>
            )
    }
}

export default EventButton;