const express = require("express");
const app = express()
const port = 4000

const User = require("./models").user;

app.use(express.json());

app.post("/echo", (req, res) => {
    res.json(req.body);
  });

// Create a new user account
app.post("/users", async (req, res, next) => {
    try {
      const email = req.body.email;
      if (!email || email === " ") {
        res.status(400).send("Must provide an email address");
      } else {
        const user = await User.create(req.body);
        res.json(user);
      }
    } catch (e) {
      next(e);
    }
  });
  


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})