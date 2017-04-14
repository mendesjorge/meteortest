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
                        <span className="statement">
                            <T>common.lobby.NapNearWork</T>
                        </span>
                    </MainFrame>
                    
                    <MainFrame id="how" title={i18n.__("common.navbar.HowItWorks")}>
                        {/* <DoubleButtonTemplate/> */}

                        <div className="info-box inactive">
                            <div className="info-item client active">
                                <span className="statement">
                                    <T>common.howitworks.MonetizeYourHomeSteps</T>
                                </span>
                                <div className="display-flex">
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
                                <span className="statement">
                                    <T>common.whyshuteye.StayWithYourHealthyHabits</T>
                                </span>
                                <div className="info-pane">
                                    <div>
                                        <div>
                                            <span className="glyphicon glyphicon-time"></span>
                                            <T>common.whyshuteye.Simple</T>
                                        </div>
                                        <T>common.whyshuteye.SimpleClientDescription</T>
                                    </div>
                                    <div>
                                        <div>
                                            <span className="glyphicon glyphicon-map-marker"></span>
                                            <T>common.whyshuteye.Near</T>
                                        </div>
                                        <T>common.whyshuteye.NearClientDescription</T>
                                    </div>
                                    <div>
                                        <div>
                                            <span className="glyphicon glyphicon-bed"></span>
                                            <T>common.whyshuteye.Comfortable</T>
                                        </div>
                                        <T>common.whyshuteye.ComfortableClientDescription</T>
                                    </div>
                                    <div>
                                        <div>
                                            <span className="glyphicon glyphicon-thumbs-up"></span>
                                            <T>common.whyshuteye.Pleasant</T>
                                        </div>
                                        <T>common.whyshuteye.PleasantClientDescription</T>
                                    </div>
                                    <div>
                                        <div>
                                            <span className="glyphicon glyphicon-eur"></span>
                                            <T>common.whyshuteye.Cheap</T>
                                        </div>
                                        <T>common.whyshuteye.CheapClientDescription</T>
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
                                <span className="statement">
                                    <T>common.howistart.ClientDescription</T>
                                </span>
                                <div className="list-group">
                                    <div className="list-group-item">
                                        <div className="display-flex">
                                            <div>
                                                <span className="glyphicon glyphicon-time"></span>
                                                <T>common.howistart.Registry</T>
                                            </div>
                                            <div>
                                                <T>common.howistart.RegistryDescription</T>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        <div className="display-flex">
                                            <div>
                                                <span className="glyphicon glyphicon-time"></span>
                                                <T>common.howistart.Search</T>
                                            </div>
                                            <div>
                                                <T>common.howistart.SearchDescription</T>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        <div className="display-flex">
                                            <div>
                                                <span className="glyphicon glyphicon-time"></span>
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
                </div>
            </div>
            );
    }
}