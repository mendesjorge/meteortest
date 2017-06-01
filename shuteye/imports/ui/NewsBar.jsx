import React, { Component, PropTypes } from 'react';
import EmailSubmissionForm from './EmailSubmissionForm';
import EmailPropertiesForm from './EmailPropertiesForm';
import i18n from 'meteor/universe:i18n';

export default class NewsBar extends Component {

  	render() {
	  	const T = i18n.createComponent();
	  	
	    return (
	    	<nav className="navbar navbar-fixed-bottom navbar-news">
				<div className="container-fluid">
					<div className="navbar-left">
						<EmailSubmissionForm/>
					</div>
					<div className="navbar-right">
						<EmailPropertiesForm/>
					</div>
				</div>
			</nav>
	    );
  }
}
