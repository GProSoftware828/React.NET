import React, { Component } from 'react';
import { Animations } from './Animations';

export class Home extends Component {
    displayName = Home.name



  render() {
    return (
      <div>
            <Animations />
        <p>This is a single-page application, built with:</p>
        <ul>
            <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
            <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
            <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            <li>Client-side navigation shown in the nav bar</li>
            <li>Development mode watchful debugging</li>
            <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
            <li><p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p></li>
            </ul>
            <p>See below examples of three form types in React:</p>
            <p>Enter your answer and open the console:</p>
      </div>
    );
  }
}
