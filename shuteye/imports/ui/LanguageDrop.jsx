import React, { Component, PropTypes } from 'react';

import i18n from 'meteor/universe:i18n';
//import LanguageStrings from './LanguageStrings';

export default class LanguageDrop extends Component {
  
	renderFlags() {
		let flags = [
			{code:"pt-PT", name:i18n.__("common.navbar.pt-PT")},
			{code:"en-US", name:i18n.__("common.navbar.en-US")}, 
			{code:"es-ES", name:i18n.__("common.navbar.es-ES")}
		];

		return(
			flags.map((data) =>
				(
				<li id={data.code} title={data.name}>
					<img className="flag"/>
				</li>
				)
				)
			);
	}

	renderCurrentFlag(){
		let localeString = i18n.getLocale();
		let currentFlag = {code:localeString, name:i18n.__("common.navbar."+localeString)};

		return(
			<button className="btn dropdown-toggle" id="language-drop" selected={currentFlag.code} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				{currentFlag.name}
			</button>
			);
	}

  	render() {
	  	const T = i18n.createComponent();
	  	
	    return (
	    	<div className='dropdown'>
	    	{this.renderCurrentFlag()}
	    		<ul className="dropdown-menu" aria-labelledby="language-drop">
	    			{this.renderFlags}
	    		</ul>
	    	</div>
	    );
  }
}
