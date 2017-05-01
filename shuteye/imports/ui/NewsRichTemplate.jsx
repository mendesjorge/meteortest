import React, { Component } from 'react';

import reactDOM from 'react-dom';

export default class NewsRichTemplate extends Component{
	
	render(){
		var self = this;
		var elemId = "newslink-"+self.props.url;

		var title = self.props.title;
		var img = self.props.img;
		var discription = self.props.discription;

		// LinkPreview.getPreview(this.props.url)
		// .then(data => {
		// 	reactDOM.render(
		// 		(
		// 			<div className="news-pane">
		// 				<div className="news-img">
  //                       	<img url={data.images[0]}/>
  //                       </div>
  //                       <div className="news-text">
  //                       	<span> {data.title}</span>
  //                       </div>
		// 			</div>
		// 		),
		// 		document.getElementById("#"+elemId)
		// 	)
		// });

		return (
			<a id={elemId} href={self.props.url} target="_blank">
				<div className="news-pane">
					<div className="news-img">
	                	<img src={img}/>
	                </div>
	                <div className="news-text">
	                	<span className="title">{title}</span>
	                	<span className="discription">{discription}</span>
	                </div>
				</div>
			</a>
			)
	}
}