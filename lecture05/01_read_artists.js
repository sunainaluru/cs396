Artist = require("./schema/Artist");
utils = require("./config/utilities");
samples = require("./samples")

const { connectToDB, disconnectFromDB } = utils;

const getAllArtists = () => {
    // this is a promise;
    return Artist.find({"name": "blah"});
};


connectToDB
    .then(getAllArtists) // pass in some function that returns a promise
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