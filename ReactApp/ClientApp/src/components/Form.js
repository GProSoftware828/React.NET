import React, { Component } from 'react';
import '../index.css';

export class UncontrolledComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
        }

        //this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
        //this.handleChangeLastName = this.handleChangeLastName.bind(this)
        //single change handler:
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value,
        })
    }

    /*handleChangeFirstName({ target }) {
        this.setState({
            firstName: target.value,
        })
        console.log(this.state.value)
    }

    handleChangeLastName({ target }) {
        this.setState({
            lastName: target.value,
        })
        console.log(this.state.value)
    }*/

    //this outputs in console: unsepcified error:
    handleSubmit(e) {
        /*this.setState({
            value: target.value,
        })*/
        e.preventDefault()
        console.log(`${this.state.firstName} ${this.state.lastName}`)
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>

                    <label className="item-margin">Favorite comedian first name:</label>
                    <input type="text" name="firstName" onChange={this.handleChange} />
                    <br/>
                    <label className="item-margin">Favorite comedian last name:</label>
                <input type="text" name="lastName" onChange={this.handleChange} />
                    <button className="item-margin">Submit</button>
                </form>
            </div>
            )
    }
}

export default UncontrolledComponent;
