import React, { Component, PropTypes } from 'react';
import LanguageDrop from './LanguageDrop';
import i18n from 'meteor/universe:i18n';
//import LanguageStrings from './LanguageStrings';

export default class MenuBar extends Component {
  
	
  	render() {
	  	const T = i18n.createComponent();
	  	
	    return (
	    	<nav className="navbar navbar-fixed-top">
				<div className="pn-container">
					<div className="nav-header">
						<a className="navbar-brand logo" href="#index">
							<div/>
						</a>
						<LanguageDrop/>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="nav-link" href="#how">
									<T>common.navbar.HowItWorks</T> 
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#why">
									<T>common.navbar.WhyShuteye</T>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#start">
									<T>common.navbar.HowIStart</T>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#what">
									<T>common.navbar.WhatIsNew</T>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
	    );
  }
}
