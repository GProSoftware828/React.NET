import React from 'react';
import '../index.css';
import { Motion, spring } from 'react-motion';

export class Animations extends React.Component {
    render() {
        return (
            <Motion defaultStyle={{ opacity: 0.01 }} style={{opacity: spring(1)}}>
                {interpolatingStyle => (
                    <h1 style={interpolatingStyle}>React.NET example:</h1>
                )}
            </Motion>
            )
    }
}

export default Animations;