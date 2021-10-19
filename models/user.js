const mongoose = require("mongoose");


var listScheme = mongoose.Schema({
    model:String,
    speed:Number,
    KW:Number,
    oil:Number,
    temperature:String,
})
// {"model":"WD145E3TAD35","speed":"1500","KW":"353","oil":"198","temperature":"<700"}

var User = mongoose.model("list_1a1",listScheme);

module.exports = User;