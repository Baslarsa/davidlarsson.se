const fetch = require('node-fetch');

//This is to keep the free heroku deployment dyno to not sleep after 30 mins.
console.log('running');
const wakeUpDyno = (url, interval = 1, callback) => {
    const milliseconds = interval * 5000;
    setTimeout(() => {
        try {
            console.log(`setTimeout called.`);
            // HTTP GET request to the dyno's url
            fetch(url).then(() => console.log(`Fetching ${url}.`));
        } catch (err) {
            // catch fetch errors
            console.log(`Error fetching ${url}: ${err.message} 
            Will try again in ${interval} minutes...`);
        } finally {
            try {
                callback(); // execute callback, if passed
            } catch (e) {
                // catch callback error
                callback ? console.log('Callback failed: ', e.message) : null;
            } finally {
                // do it all again
                return wakeUpDyno(url, interval, callback);
            }
        }
    }, milliseconds);
};

const express = require('express');

const PORT = 2121;
const DYNO_URL = 'https://davidlarsson-backend.herokuapp.com/homepage';

const app = express();

app.listen(PORT, () => {
    wakeUpDyno(DYNO_URL, 25, () => {
        console.log('Wakey wakey');
    });
});
