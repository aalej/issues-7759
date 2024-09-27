const { onRequest } = require("firebase-functions/v2/https");

exports.reportGtmEvent = onRequest((req, res) => {
    res.send("Analytics GTM Event Function");
});
