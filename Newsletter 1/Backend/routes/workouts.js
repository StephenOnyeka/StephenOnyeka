// const app = require('express')
const express = require("express");
const router = express.Router(); //this creates an instance of a router
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
// const { getSubscriptions, createSubscription} = require('../controllers/subscribeController');
const { get } = require("mongoose");

//GET all workouts and a subscription
router.get("/", getWorkouts);
// router.get("/", getWorkouts, getSubscriptions);

//GET a single workout
router.get("/:id", getWorkout);

// POST a new workout and a subscription
router.post("/", createWorkout);
// router.post("/", createWorkout, createSubscription);

//DELETE a workout
router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
