//esnext
import { Mongo } from 'meteor/mongo';
import { createContainer } from 'meteor/react-meteor-data';

export const clients = new Mongo.Collection("clientrequests");

// export default class Clients{

// 	insert(id, data){
// 		clients.insert({_id:id, data:data, createDate:new Date()});
// 	}
// }

