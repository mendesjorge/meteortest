import React, { Component, PropTypes } from 'react';
import LanguageDrop from './LanguageDrop';
import i18n from 'meteor/universe:i18n';
//import LanguageStrings from './LanguageStrings';

export default class MenuBar extends Component {
  	
  	onItemClicked(e){
  		var activeItem = document.querySelector(".nav-item.active");
  		if(activeItem && activeItem != e.currentTarget){
  			activeItem.classList.remove("active");
  		}
		e.currentTarget.parentElement.classList.add("active");
  	}
	
  	clearActiveNavItem(){
  		var activeItem = document.querySelector(".nav-item.active");
  		if(activeItem){
  			activeItem.classList.remove("active");
  		}
  	}

  	render() {
	  	const T = i18n.createComponent();
	  	
	    return (
	    	<nav className="navbar navbar-fixed-top">
				<div className="pn-container">
					<div className="nav-header">
						<a className="navbar-brand logo" onClick={() => this.clearActiveNavItem()} href="#index">
							<div/>
						</a>
						<LanguageDrop/>
						<a className="btn btn-default back-soon" role="button" target="_blank" href="https://shuteye.sharetribe.com">
                            <T>common.navbar.GoToMarket</T>
                        </a>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="nav-link" onClick={(e) => this.onItemClicked(e)} href="#how">
									<T>common.navbar.HowItWorks</T> 
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" onClick={(e) => this.onItemClicked(e)} href="#why">
									<T>common.navbar.WhyShuteye</T>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" onClick={(e) => this.onItemClicked(e)} href="#start">
									<T>common.navbar.HowIStart</T>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" onClick={(e) => this.onItemClicked(e)} href="#what">
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
