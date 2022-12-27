const express = require('express');
const cors = require('cors');

const whiteList = [
    "http://localhost:3001",
    "http://localhost:3000",
    "http://20.78.33.55",
    "https://20.78.33.55"
];

var corsOptions = (req, cb) => {
    var corsOpts;
    if (whiteList.indexOf(req.header('Origin')) !== -1) {
        corsOpts = { origin: true };
    } else {
        corsOpts = { origin: false };
    }
    cb(null, corsOpts);
};

exports.cors = cors();
exports.corsWithOpts = cors(corsOptions);