const CO2 = require("../models/co2");

module.exports.get = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
    const options = {
        page: req.params.page ? req.params.page : 1,
        limit: 100,
        sort: {
            createdAt: -1,
        },
        collation: {
            locale: "en",
        },
    };
    CO2.paginate({}, options, function(err, data) {
        if (err) console.log(err);
        res.status(200).json(data);
    });
};