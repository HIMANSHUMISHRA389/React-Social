const mongoose = require("mongoose");

const ConversationSchema = mongoose.Schema({
 members:{
    type:Array
 },
},{
    timestamp:true
});

const converation = mongoose.model("Conversation", ConversationSchema);
module.exports = converation;
