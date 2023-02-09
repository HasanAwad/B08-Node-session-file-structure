const { Schema, model } = require("mongoose");

const StudentSchema = new Schema({
  username: {
    type: "string",
    unique: true,
    required: true,
    trim: true,
    maxlength: 50,
  },
  name: {
    type: "string",
    required: true,
  },
  image: { type: String, required: true },

  address: String,

  phone: String,
});

const Student = model("students", StudentSchema);

module.exports = Student;
