import React, { Component, PropTypes } from 'react';

import i18n from 'meteor/universe:i18n';

export default class LanguageDrop extends Component {
  
	languageSelect(el){
		i18n.setLocale(el);
	}

	renderFlags() {
		let flags = [
			{code:"pt-PT", name: i18n.__("common.navbar.pt-PT"), class:"flag pt-PT"},
			{code:"en-US", name: i18n.__("common.navbar.en-US"), class:"flag en-US"}, 
			// {code:"es-ES", name: i18n.__("common.navbar.es-ES"), class:"flag es-ES"}
		];

		let localeString = i18n.getLocale();

		flags = flags.filter((x)=>{return x.code != localeString});

		return(
			flags.map((data) =>
				
				(
				<li title={data.name}>
					<a href='#' onClick={() => this.languageSelect(data.code)}>
						<img className={data.class}/>
					</a>
				</li>
				)
				)
			);
	}

	renderCurrentFlag(){
		let localeString = i18n.getLocale();
		let currentFlag = {
			code:localeString,
			name:i18n.__("common.navbar."+localeString),
			class:"flag "+localeString
		};

		return(
			<button className="btn dropdown-toggle" id="language-drop" title={currentFlag.name} selected={currentFlag.code} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				<img className={currentFlag.class} />
			</button>
			);
	}

  	render() {
	  	const T = i18n.createComponent();
	  	
	    return (
	    	<div className='dropdown language-flags'>
	    	{this.renderCurrentFlag()}
	    		<ul className="dropdown-menu dropdown-menu-right" aria-labelledby="language-drop">
	    			{this.renderFlags()}
	    		</ul>
	    	</div>
	    );
  }
}
