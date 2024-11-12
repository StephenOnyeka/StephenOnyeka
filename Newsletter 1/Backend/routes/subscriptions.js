// const app = require('express')
const express = require("express");
const router = express.Router(); //this creates an instance of a router

const {
  getSubscriptions,
  createSubscription,
} = require("../controllers/subscribeController");
const { get } = require("mongoose");

//GET all workouts and a subscription
router.get("/", getSubscriptions);

// POST a new workout and a subscription
router.post("/", createSubscription);

//DELETE a workout
// router.delete("/:id", deleteWorkout);

//UPDATE a workout
// router.patch("/:id", updateWorkout);

module.exports = router;
