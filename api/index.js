const express = require("express");
const app = express();
const { authUser } = require("./verifyToken");
const port = 3001;
const axios = require("axios").default;

app.use(require("cors")());

// get list of tasks
app.get("/task", authUser, async (req, res) => {
  try {
    res
      .status(200)
      .json(
        req.userData.tasks.sort(
          (a, b) => new Date(a.endDate) - new Date(b.endDate)
        )
      );
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/initiateTelebot/", (req, res) => {
  try {
    axios
      .post(`http://localhost:3000/link/new/8073e7cd`) // Hardcoded single user
      .then((response) => res.status(200).json(response.data));

    // need to change to telebot APIs response
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(port, () => console.log(`Server listening to ${port}`));
