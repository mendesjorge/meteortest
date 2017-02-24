import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';
import MainFrame from './MainFrame';
import MenuBar from './MenuBar';
// import Task from './Task.jsx';

// App component - represents the whole app
export default class App extends Component {
    constructor(props) {
        super(props);

        i18n.setLocale(getLang());

        i18n.onChangeLocale(()=>{this.forceUpdate();});
    }

    userTypeClick(e){
        var name = e.currentTarget.id;

        var activeItems = document.querySelector(".info-item.active");
        // if(activeItems)
        // {
            activeItems.classList.remove("active");
        //}
        document.querySelector("."+name).classList.add("active");
        
        var activeBtn = document.querySelector(".active.full-color");
        if(activeBtn)
        {
            activeBtn.classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    }

    render() {
        const T = i18n.createComponent();
        return (
            <div className="container">
                <MenuBar/>
                <div className="frame-container">
                    <MainFrame id="index" title={i18n.__("common.lobby.TheSleepingUber")}>
                        <span className="statement">
                            <T>common.lobby.NapNearWork</T>
                        </span>
                        <div className="orange-border">
                            <T>common.lobby.MonetizeYourHome</T>
                        </div>
                        <div className="orange-border">
                            <T>common.lobby.PickPlaceToNap</T>
                        </div>
                    </MainFrame>
                    <MainFrame id="how" title={i18n.__("common.navbar.HowItWorks")}>
                        <div className="horiz-center">
                            <a id="proprietary" className="full-color base-color" onClick={this.userTypeClick}>
                                <T>common.howitworks.Proprietary</T>
                            </a>
                            <a id="client" className="full-color negative-color" onClick={this.userTypeClick}>
                                <T>common.howitworks.Client</T>
                            </a>
                        </div>

                        <div className="info-box inactive">
                            <span className="info-item active inactive-text">
                                <T>common.howitworks.SelectPropOrClient</T>
                            </span>
                            <div className="info-item proprietary">proprietary</div>
                            <div className="info-item client">client</div>
                        </div>

                    </MainFrame>
                </div>
            </div>
            );
    }
}