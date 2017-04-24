import React, { Component } from 'react';
 
import i18n from 'meteor/universe:i18n';
 
// App component - represents the whole app
export default class MainFrame extends Component {

  render() {
    return (
      <div className="page">
		<div id={this.props.id+"Page"}>
  			<h1 className="page-title" id={this.props.id}> {this.props.title} </h1>
				{this.props.children}
  		</div>
	</div>
    );
  }
}