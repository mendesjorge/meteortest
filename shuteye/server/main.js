import { Meteor } from 'meteor/meteor';

import '../imports/api/tasks.js';

var connectHandler = WebApp.connectHandlers;

Meteor.startup(() => {
	connectHandler.use((req,res,next) => {
		res.setHeader("X-UA-Compatible","IE=edge");
		return next();
	});
});
