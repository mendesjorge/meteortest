import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';

// App component - represents the whole app
export default class DoubleButtonTemplate extends Component {

    userTypeClick(e){
        var name = e.currentTarget.id;

        var activeItems = document.querySelector(".info-item.active");

        activeItems.classList.remove("active");
        document.querySelector("."+name).classList.add("active");

        var activeBtn = document.querySelector(".active.full-color");
        if(activeBtn)
        {
            activeBtn.classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    }

    renderButton(id,text,isActive){
        var classname = "full-color";

        if(isActive){
            classname+=" active";
        }

        return (
        <a id={id} className={classname} onClick={this.userTypeClick}>
            <span>{text}</span>
        </a>
        )
    }

    render() {
        return (
            <div className="horiz-center">
                {this.renderButton("client", i18n.__("common.howitworks.Client"), true)}
                {this.renderButton("proprietary", i18n.__("common.howitworks.Proprietary"))}
            </div>
            );
    }
}