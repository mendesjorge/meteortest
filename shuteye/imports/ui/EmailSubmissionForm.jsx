import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';
import { clients } from '../api/clients.js';
import ReactDOM from 'react-dom';

export default class EmailSubmissionForm extends Component{

	handleSubmit(event){
		event.preventDefault();

		const elem = ReactDOM.findDOMNode(this.refs.emailInput);
		const email = elem.value.trim();
debugger;
		clients.insert({_id:email, data:email, createDate:new Date()});
		elem.value = '';
	}

	render(){
		const T = i18n.createComponent();

		return (
				<form className="email-form" onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<T>label</T>
						<input 
							type="email"
							ref="emailInput"
							placeholder="example@domain.com"
						/>
						<input type='submit'/>
					</div>
				</form>
			)
	}
}