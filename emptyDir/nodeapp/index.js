const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/write", (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).send("Nothing to write.");
    }
    fs.writeFile("./fileStore/my-file.txt", content, (err) => {
      if (err) throw err;
      res.send("Wrote the content successfully");
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}!`);
});
