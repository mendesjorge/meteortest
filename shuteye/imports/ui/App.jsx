import React, { Component } from 'react';
 
import i18n from 'meteor/universe:i18n';
import MenuBar from './MenuBar';
// import Task from './Task.jsx';
 
// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
      <div className="container">
        <MenuBar/>
      </div>
    );
  }
}