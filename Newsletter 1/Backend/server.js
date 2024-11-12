require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const subscriptionRoutes = require('./routes/subscriptions');


//using middleware
app.use(express.json()); //What this does is any request that comes in, it looks if it has some body to the request, so some data that we're sending to the server and if it does, then it passes it and attaches it to the request object so we can access it in the request handler
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("db has connected successfully");
}).catch((error)=>{console.log(error)})

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});

// uR1LR3DvrwIKk4C8;
