import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';
import { properties } from '../api/clients.js';
import ReactDOM from 'react-dom';

export default class EmailPropertiesForm extends Component{

	handleSubmit(event){
		const T = i18n.createComponent();
		
		event.preventDefault();

		const elem = ReactDOM.findDOMNode(this.refs.emailInput);
		const email = elem.value.trim();

		const time = new Date();

		properties.insert(
			{
				_id:email,
				data:email,
				createDate:time.toISOString(),
				createDateToken:time.getTime()
			},
			(err, result) => {

				if(!err){
					// const fieldset = ReactDOM.findDOMNode(this.refs.emailFieldset);
					// fieldset.setAttribute("disabled","disabled");
					ReactDOM.render(
						(
							<T>Successfully sent</T>
						),
						document.getElementById("propSubs")
					);
				}
			}
			);
		//elem.value = '';
	}

	render(){
		const T = i18n.createComponent();

		return (
				<div id="propSubs">
					<form className="email-form" onSubmit={this.handleSubmit.bind(this)}>
						<fieldset ref="emailFieldset">
							<T _props={{className:'title'}}>common.whatisnew.getNews</T>
							<div className="display-flex input-group">
								<input className="form-control"
									type="email"
									ref="emailInput"
									placeholder="example@email.com"
								/>
								<span className="input-group-btn">
									<button className="btn" type='submit'>{i18n.__("common.whatisnew.submitBtn")}</button>
								</span>
							</div>
						</fieldset>
					</form>
				</div>
			)
	}
}