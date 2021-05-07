const express = require("express"),
  Mongoose = require("mongoose"),
  app = express(),
  PORT = "3000",
  UserSchema = require("./model/user.model");

// const uri =
//   "mongodb+srv://user:!Somvalex@cluster0.bghcn.mongodb.net/zuri3?retryWrites=true&w=majority";

const uri = "mongodb://localhost:27017/zuri3";

// connect database
Mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  err => {
    if (err) console.log(err);
    else console.log("Database Connected");
  }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create a new user
app.post("/", async (req, res, next) => {
  const { name, email, country } = req.body;

  try {
    let data = await UserSchema.create({
      name,
      country,
      email
    });

    res.send({ message: "User Successfully Created", data });
  } catch (err) {
    res.send({ message: err.message });
  }
});

// Get a particular user with the provided ID
app.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    let data = await UserSchema.findOne({ _id: id });

    res.send({ message: "User Successfully Retrieved", data });
  } catch (err) {
    res.send({ message: err.message });
  }
});

// Update a particular user with the provided ID
app.put("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    let data = await UserSchema.findOneAndUpdate({ _id: id }, req.body, {
      new: true
    });

    res.send({ message: "User Successfully Updated", data });
  } catch (err) {
    res.send({ message: err.message });
  }
});

// Delete a particular user with the provided ID
app.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    let data = await UserSchema.findOneAndDelete({ _id: id });

    res.send({ message: "User Successfully Deleted" });
  } catch (err) {
    res.send({ message: err.message });
  }
});

// Get all users
app.get("/", async (req, res, next) => {
  try {
    let data = await UserSchema.find({});

    res.send({ message: "User Successfully Retrieved", data });
  } catch (err) {
    res.send({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));