import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';
import DoubleButtonTemplate from './DoubleButtonTemplate';
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
                        <DoubleButtonTemplate/>

                        <div className="info-box inactive">
                            <div className="info-item client active">
                                <span className="statement">
                                    <T>common.howitworks.MonetizeYourHomeSteps</T>
                                </span>
                                <div>
                                    <ul>
                                        <li>
                                            <span className="glyphicon glyphicon-user"></span>
                                            <T>common.howitworks.RegistryAndFillProfile</T>
                                        </li>
                                        <li>
                                            <span className="glyphicon glyphicon-home"></span>
                                            <T>common.howitworks.CreateProfileNapHouse</T>
                                        </li>
                                        <li>
                                            <span className="glyphicon glyphicon-calendar"></span>
                                            <T>common.howitworks.PickAvailablePeriods</T>
                                        </li>
                                        <li>
                                            <span className="glyphicon glyphicon-ok"></span>
                                            <T>common.howitworks.RateGuestNap</T>
                                        </li>
                                    </ul>
                                    <div></div>
                                </div>
                            </div>
                            <div className="info-item proprietary">proprietary</div>
                        </div>

                    </MainFrame>
                </div>
            </div>
            );
    }
}