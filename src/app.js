const express = require("express");
const { handleRead } = require("./controller/index.js");
const controller = require("./controller/index.js");

const app = express();

app.use(express.json());

const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

//CREATE
app.post("/create", async (req, res) => {
  const { name, lastname, dateOfBirth, yearOfBirth, isMuggle } = req.body;
  try {
    // await controller.handleCreate({
    //   name,
    //   lastname,
    //   dateOfBirth,
    //   yearOfBirth,
    //   isMuggle,
    // });
    res.status(201).json({
      msg: await controller.handleCreate({
        name,
        lastname,
        dateOfBirth,
        yearOfBirth,
        isMuggle,
      }),
    });
  } catch (err) {
    res.send(err.message);
  }
});

//READ
app.get("/read/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // await controller.handleRead(parseInt(id));

    res.status(200).json({ succes: await handleRead(id) });
  } catch (err) {
    res.status(400).json(err.message);
  }
});
