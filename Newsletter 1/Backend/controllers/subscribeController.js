const Subscribe = require("../models/subscribeModel");
// const mongoose = require('mongoose');

//Get all subscriptions
const getSubscriptions = async (req, res) => {
    const subs = await Subscribe.find({})
    res.status(200).json(subs)
}

//Get a single subscription

//Create a new subscription
const createSubscription = async (req, res) => {
    const { email } = req.body

    //validate the email format
    if (!email.includes("@") || !email.includes(".com")) {
        return res.status(400).json({ error: "Invalid email format" })      
    }
    // check if the email already exists
    
    const existingSubscription = await Subscribe.findOne({ email });    
    if (existingSubscription) {
    return res.status(400).json({ warn: "Email is already subscribed" });
  }

    //add doc to db
    try {
        const subscription = await Subscribe.create({ email });
        // res.status(200).json(subscription);
        res.status(200).json({mssg: "Subscribed successfully", subscription})
    } catch (error) {
        res.status(400).json({error: error.message})
        // res.status(400).json({warn: warn.message})
    }
}

module.exports = {
    getSubscriptions,
    createSubscription
}