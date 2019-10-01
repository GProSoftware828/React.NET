import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../index.css'

export class Animations extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppear
                transitionAppearTimeout={2000}
            >
                <h1>React.NET example:</h1>
            </ReactCSSTransitionGroup>
            )
    }
}

export default Animations;