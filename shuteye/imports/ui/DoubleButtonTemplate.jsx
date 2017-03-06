import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';

// App component - represents the whole app
export default class DoubleButtonTemplate extends Component {

    userTypeClick(e){
        var name = e.currentTarget.id;

        var activeItems = document.querySelectorAll(".info-item.active");

        activeItems.forEach((elem)=>
        {
            elem.classList.remove("active");
        });

        document.querySelectorAll("."+name).forEach(elem =>
        {
            elem.classList.add("active");
        });
        

        var activeBtn = document.querySelectorAll(".full-color");
        if(activeBtn)
        {
            activeBtn.forEach(elem =>
            {
                if(name == elem.id)
                {
                    if(!elem.classList.contains("active"))
                    {
                        elem.classList.add("active");
                    }
                }
                else
                {
                    elem.classList.remove("active"); 
                }
            });
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