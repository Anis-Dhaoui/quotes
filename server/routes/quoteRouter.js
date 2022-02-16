const express = require('express');
const Quotes = require('../models/quoteSchema');
const mongoose = require('mongoose');
const quoteRouter = express.Router();
const cors = require('./cors');

quoteRouter.use(express.json());

// /quotes/ api endpoint
quoteRouter.route('/')
.options(cors.corsWithOpts, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) =>{
    Quotes.find({})
    .then((quotes) =>{
        if (quotes !== null){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(quotes);
        }else{
            err = new Error("Quotes collection is empty or not found");
            next(err);
        }
    },
    err => next(err))
    .catch(err => next(err))
})
.post(cors.corsWithOpts, (req, res, next) =>{
    Quotes.create(req.body)
    .then((quote) =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, message: "Quote added successfully", quote: quote});
    },
    err => {
        // if err.code === 11000 that means there is a duplicate key
        if(err.code && err.code === 11000){
            res.statusCode = 409;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: false, message: "Quote name is already exist"});
        }else
        next(err);
    })
    .catch(err => next(err));
})

// /quotes/quoteId api endpoint

quoteRouter.route('/:quoteId')
.options(cors.corsWithOpts, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) =>{
    Quotes.findById(req.params.quoteId)
    .then((quote) =>{
        if (quote != null){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(quote);
        }else{
            err = new Error("Quote not found");
            next(err);
        }
    },
    err => next(err))
    .catch(err => next(err))
})
.put(cors.corsWithOpts, (req, res, next) =>{
    Quotes.findByIdAndUpdate(req.params.quoteId, {$set: req.body}, {new: true})
    .then((quote) =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, message: "Quote updated successfully", updatedQuote: quote});
    },
    err => next(err))
    .catch(err => next(err))
})
.delete(cors.corsWithOpts, (req, res, next) =>{
    Quotes.findByIdAndRemove(req.params.quoteId)
    .then((quote) =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(quote);
    },
    err => next(err))
    .catch(err => next(err))
});

module.exports = quoteRouter;