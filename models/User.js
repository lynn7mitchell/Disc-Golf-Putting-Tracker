const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  practiceRounds: [
    {
      date: { type: Date, default: Date.now },
      totalMade: { type: String },
      totalMissed: { type: String },
      tenFt: {
        totalMade: { type: String },
        totalMissed: { type: String },
      },
      fifteenFt: {
        totalMade: { type: String },
        totalMissed: { type: String },
      },
      twentyFt: {
        totalMade: { type: String },
        totalMissed: { type: String },
      },
      twentyFiveFt: {
        totalMade: { type: String },
        totalMissed: { type: String },
      },
      thirtyFt: {
        totalMade: { type: String },
        totalMissed: { type: String },
      },
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
