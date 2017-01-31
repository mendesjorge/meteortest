import React, { Component, PropTypes } from 'react';

import i18n from 'meteor/universe:i18n';
//import LanguageStrings from './LanguageStrings';

export default class MenuBar extends Component {
  
	
  	render() {
	  	const T = i18n.createComponent();
	  	i18n.setLocale(getLang());
	    return (
	    	<nav classname="navbar">
				<div classname="container">
					<a classname="navbar-brand" href="#">
						<T>common.navbar.shuteye</T>
					</a>

					<div classname="collapse navbar-collapse">
						<ul classname="navbar-nav mr-auto">
							<li classname="nav-item active">
								<a classname="nav-link" href="#">
									<T>common.navbar.HowItWorks</T> 
								</a>
							</li>
							<li classname="nav-item">
								<a classname="nav-link" href="#">
									<T>common.navbar.WhyShuteye</T>
								</a>
							</li>
							<li classname="nav-item">
								<a classname="nav-link" href="#">
									<T>common.navbar.HowIStart</T>
								</a>
							</li>
							<li classname="nav-item">
								<a classname="nav-link" href="#">
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
