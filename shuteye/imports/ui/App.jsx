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
    render() {
        const T = i18n.createComponent();
        return (
            <div className="container">
                <MenuBar/>
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
                        <div className="full-color base-color">
                            <T>common.howitworks.Proprietary</T>
                        </div>
                        <div className="full-color negative-color">
                            <T>common.howitworks.Client</T>
                        </div>
                    </div>
                </MainFrame>
            </div>
            );
    }
}