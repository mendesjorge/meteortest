import React, { Component } from 'react';

import DoubleButtonTemplate from './DoubleButtonTemplate';
import i18n from 'meteor/universe:i18n';
import ImageGallery from 'react-image-gallery';
import MainFrame from './MainFrame';
import MenuBar from './MenuBar';
import ReactPlayer from 'react-player';
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

        const indexImages = [
            {
                original:"images/gallery/photo1.jpg",
                thumbnail:"images/gallery/photo1.jpg",
                originalClass:"slide-image"
            },
            {
                original:"images/gallery/photo2.jpg",
                thumbnail:"images/gallery/photo2.jpg",
                originalClass:"slide-image"
            },
            {
                original:"images/gallery/photo3.jpg",
                thumbnail:"images/gallery/photo3.jpg",
                originalClass:"slide-image"
            },
            {
                original:"images/gallery/photo4.jpg",
                thumbnail:"images/gallery/photo4.jpg",
                originalClass:"slide-image"
            }
        ];

        return (
            <div>
                <MenuBar/>
                <div className="frame-container">
                    <MainFrame id="index" title={i18n.__("common.lobby.TheSleepingUber")}>
                        <div className="SlideFrame">
                            <ImageGallery items={indexImages} slideInterval={10000} autoPlay={true} showNav={false} showThumbnails={false} showPlayButton={false} showFullscreenButton={false}/>
                        </div>
                        <T _tagType="h2">common.lobby.TheSleepingUber2</T>
                        <span className="statement">
                            {i18n.__("common.lobby.NapNearWork")}
                        </span>
                    </MainFrame>
                    
                    <MainFrame id="how" title={i18n.__("common.navbar.HowItWorks")}>
                        {/* <DoubleButtonTemplate/> */}

                        <div className="info-box inactive">
                            <div className="info-item client active">
                                <span className="statement">
                                    <T>common.howitworks.EnjoyYourNapSteps</T>
                                </span>
                                <div className="display-flex">
                                    <div className="list-group">
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-user"></span>
                                            <T>common.howitworks.RegistryAndFillProfile</T>
                                        </div>
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-home"></span>
                                            <T>common.howitworks.SearchAvailableNapHouse</T>
                                        </div>
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                            <T>common.howitworks.ReserveSeveralOrOnce</T>
                                        </div>
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-ok"></span>
                                            <T>common.howitworks.RateNapHouse</T>
                                        </div>
                                    </div>
                                    <div>
                                        <ReactPlayer url="/videos/Shuteye.mp4" controls/>
                                    </div>
                                </div>
                            </div>
                            <div className="info-item proprietary">
                                <span className="statement">
                                    <T>common.howitworks.MonetizeYourHomeSteps</T>
                                </span>
                                <div className="display-flex">
                                    <div>
                                        <img className="info-disc-img" src="http://3.bp.blogspot.com/-_zdsiqKKU9M/TjgrixWAPyI/AAAAAAAAATM/7xQaaFZCOMQ/s1600/Beautiful-birds-nests-photo-pictures-wallpapers-images-3.jpg"/>
                                    </div>
                                    <div className="list-group">
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-user"></span>
                                            <T>common.howitworks.RegistryAndFillProfile</T>
                                        </div>
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-home"></span>
                                            <T>common.howitworks.CreateProfileNapHouse</T>
                                        </div>
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                            <T>common.howitworks.PickAvailablePeriods</T>
                                        </div>
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-ok"></span>
                                            <T>common.howitworks.RateGuestNap</T>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MainFrame>
                    
                    <MainFrame id="why" title={i18n.__("common.navbar.WhyShuteye")}>
                        {/* <!-- <DoubleButtonTemplate/> */}

                        <div className="info-box inactive">
                            <div className="info-item client active">
                                <div className="info-pane">
                                    <div className="why-item">
                                        <div>
                                            <span className="glyphicon glyphicon-time"></span>
                                            <T _props={{className:'bullet'}}>common.whyshuteye.Simple</T>
                                        </div>
                                        <T _props={{className:'description'}}>common.whyshuteye.SimpleClientDescription</T>
                                    </div>
                                    <div className="why-item">
                                        <div>
                                            <span className="glyphicon glyphicon-map-marker"></span>
                                            <T _props={{className:'bullet'}}>common.whyshuteye.Near</T>
                                        </div>
                                        <T _props={{className:'description'}}>common.whyshuteye.NearClientDescription</T>
                                    </div>
                                </div>
                                <div className="info-pane">

                                    <div className="why-item">
                                        <div>
                                            <span className="glyphicon glyphicon-bed"></span>
                                            <T _props={{className:'bullet'}}>common.whyshuteye.Comfortable</T>
                                        </div>
                                        <T _props={{className:'description'}}>common.whyshuteye.ComfortableClientDescription</T>
                                    </div>
                                    <div className="why-item">
                                        <div>
                                            <span className="glyphicon glyphicon-eur"></span>
                                            <T _props={{className:'bullet'}}>common.whyshuteye.Cheap</T>
                                        </div>
                                        <T _props={{className:'description'}}>common.whyshuteye.CheapClientDescription</T>
                                    </div>
                                </div>
                            </div>
                            <div className="info-item proprietary">
                                <span className="statement">
                                    <T>common.howitworks.MonetizeYourHomeSteps</T>
                                </span>
                                <div className="display-flex">
                                    <div>
                                        <img className="info-disc-img" src="http://3.bp.blogspot.com/-_zdsiqKKU9M/TjgrixWAPyI/AAAAAAAAATM/7xQaaFZCOMQ/s1600/Beautiful-birds-nests-photo-pictures-wallpapers-images-3.jpg"/>
                                    </div>
                                    <div className="list-group">
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-user"></span>
                                            <T>common.howitworks.RegistryAndFillProfile</T>
                                        </div>
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-home"></span>
                                            <T>common.howitworks.CreateProfileNapHouse</T>
                                        </div>
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                            <T>common.howitworks.PickAvailablePeriods</T>
                                        </div>
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-ok"></span>
                                            <T>common.howitworks.RateGuestNap</T>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MainFrame>

                    <MainFrame id="start" title={i18n.__("common.navbar.HowIStart")}>
                        {/* <!-- <DoubleButtonTemplate/> */}

                        <div className="info-box inactive">
                            <div className="info-item client active">
                                <span className="statement big-statement">
                                    <T>common.howistart.ClientDescription</T>
                                </span>
                                <div className="list-group">
                                    <div className="list-group-item">
                                        <div className="howstart-row">
                                            <div>
                                                <span className="glyphicon glyphicon-edit"></span>
                                                <T>common.howistart.RegistYou</T>
                                            </div>
                                            <div>
                                                <T>common.howistart.RegistYouDescription</T>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        <div className="howstart-row">
                                            <div>
                                                <span className="glyphicon glyphicon-search"></span>
                                                <T>common.howistart.Search</T>
                                            </div>
                                            <div>
                                                <T>common.howistart.SearchDescription</T>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        <div className="howstart-row">
                                            <div>
                                                <span className="glyphicon glyphicon-play-circle"></span>
                                                <T>common.howistart.Start</T>
                                            </div>
                                            <div>
                                                <T>common.howistart.StartDescription</T>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info-item proprietary">
                                <span className="statement">
                                    <T>common.howitworks.MonetizeYourHomeSteps</T>
                                </span>
                                <div className="display-flex">
                                    <div>
                                        <img className="info-disc-img" src="http://3.bp.blogspot.com/-_zdsiqKKU9M/TjgrixWAPyI/AAAAAAAAATM/7xQaaFZCOMQ/s1600/Beautiful-birds-nests-photo-pictures-wallpapers-images-3.jpg"/>
                                    </div>
                                    <div className="list-group">
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-user"></span>
                                            <T>common.howitworks.RegistryAndFillProfile</T>
                                        </div>
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-home"></span>
                                            <T>common.howitworks.CreateProfileNapHouse</T>
                                        </div>
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                            <T>common.howitworks.PickAvailablePeriods</T>
                                        </div>
                                        <div className="list-group-item">
                                            <span className="glyphicon glyphicon-ok"></span>
                                            <T>common.howitworks.RateGuestNap</T>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MainFrame>
                    {/*<MainFrame id="" title={i18n._("common.navbar.WhatIsNew")}>
                        <div className="row">
                            <div className="col-xs-9 news-pane">

                            </div>
                            <div className="col-xs-3">
                                <div className="social">

                                </div>
                            </div>
                        </div>

                    </MainFrame>*/}
                </div>
            </div>
            );
    }
}