import React from 'react';

export class Names extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { Name1: 'Name1' },
                { Name2: 'Name2' },
                { Name3: 'Name3' },
                { Name4: 'Name4' },
                { Name5: 'Name5' },
                { Name6: 'Name6' }
            ]
        }
    }

    render() {

        const namesList = this.state.data.map(name => {
            console.log(name);
        })

        return (
            <ul>
                <li>Placeholder</li>
            </ul>
        );
    }
}

export default Names;