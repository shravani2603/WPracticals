const mongoose = require("mongoose");

const musicScheme = new mongoose.Schema({
    Songname: String,
    Film: String,
    Music_director: String,
    singer: String,
    Actor: String,
    Actress: String,
});

const Music = mongoose.model("songdetails", musicScheme);
module.exports=Music;