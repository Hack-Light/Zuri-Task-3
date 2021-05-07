const express = require("express"),
  Mongoose = require("mongoose"),
  app = express(),
  UserSchema = require("./model/user.model");

// connect database
Mongoose.connect(
  process.env.URI,
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
app.get("/all", async (req, res, next) => {
  try {
    let data = await UserSchema.find({});

    res.send({ message: "User Successfully Retrieved", data });
  } catch (err) {
    res.send({ message: err.message });
  }
});

app.get("/", (req, res, next) => {
  res.send(`
    <h1>Hello from Onoh Somtochukwu</h1>
    `);
});

app.listen(process.env.PORT || 3000, () => console.log(`server started...`));
