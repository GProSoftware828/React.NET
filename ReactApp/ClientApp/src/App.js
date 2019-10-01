import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import axios from 'axios';
import { UncontrolledComponent } from './components/Form';
import { ControlledForm } from './components/ControlledForm';
import { JSONSchemaForm } from './components/json-schema-form';
import { EventButton } from './components/EventButton';
import { Reset } from './components/Reset';

export default class App extends Component {
  displayName = App.name

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        axios.get('https://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump')
            .then(response => {
                this.setState({ posts: response.data });
                console.log(response);
            })
    }

    render() {

        return (
            <div>

                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetchdata' component={FetchData} />
                    <p>Uncontrolled form:</p>
                    <UncontrolledComponent />
                    <p>JSON Schema form:</p>
                    <JSONSchemaForm />
                    <br />
                    <p>Controlled form:</p>
                    <ControlledForm />
                    <EventButton />
                    <Reset />
                </Layout>
                <br />
                <br/>
            </div>
        );
    };
}
