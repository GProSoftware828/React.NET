import React from 'react';

export class Names extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            data: [
                { Name1: 'Name1' },
                { Name2: 'Name2' },
                { Name3: 'Name3' },
                { Name4: 'Name4' },
                { Name5: 'Name5' },
                { Name6: 'Name6' }
            ],
            person: null,
        }
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
    }

    render() {

        /*const namesList = this.state.data.map(name => {
            console.log(name);
        })*/

        if (!this.state.person) {
            return <div>Didn't find a person</div>;
        }

        return (
            <div>
                {this.state.loading || !this.state.person ? <div>loading...</div> :
                <div>
                        <div>{this.state.person.name.first} {this.state.person.name.last}</div>
                        <div><img src={this.state.person.picture.large} /></div>
                </div>}
            </div>
        );
    }
}

export default Names;