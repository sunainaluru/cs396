const Track = require("./schema/Track");
utils = require("./config/utilities");
samples = require("./samples");

const { connectToDB, disconnectFromDB } = utils;

const getTrackById = () => {
    // your code here:
    const track_id = "6073b4f7df8bfddd5913c081" 
    return Track.findById(track_id);
}

connectToDB
    .then(getTrackById) // pass in some function that returns a promise
    .then(results => {
        // do something with the results:
        console.log('results from your query:');
        console.log(results);
    })
    .catch(err => {
        console.log("This block runs if there's an error:")
        console.log(err);
    })
    .then(disconnectFromDB);