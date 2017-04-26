import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';
import { clients } from '../api/clients.js';
import ReactDOM from 'react-dom';

export default class EmailSubmissionForm extends Component{

	handleSubmit(event){
		const T = i18n.createComponent();
		
		event.preventDefault();

		const elem = ReactDOM.findDOMNode(this.refs.emailInput);
		const email = elem.value.trim();

		const time = new Date();

		clients.insert(
			{
				_id:email,
				data:email,
				createDate:time.toISOString(),
				createDateToken:time.getTime()
			},
			(err, result) => {

				if(!err){
					debugger;
					// const fieldset = ReactDOM.findDOMNode(this.refs.emailFieldset);
					// fieldset.setAttribute("disabled","disabled");
					ReactDOM.render(
						(
							<T>Successfully sent</T>
						),
						document.getElementById("subscription")
					);
				}
			}
			);
		//elem.value = '';
	}

	render(){
		const T = i18n.createComponent();

		return (
				<div id="subscription">
					<form className="email-form" onSubmit={this.handleSubmit.bind(this)}>
						<fieldset ref="emailFieldset">
							<T>label</T>
							<input 
								type="email"
								ref="emailInput"
								placeholder="example@domain.com"
							/>
							<input type='submit'/>
						</fieldset>
					</form>
				</div>
			)
	}
}