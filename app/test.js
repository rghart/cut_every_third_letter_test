const express = require("express");
const bodyParser = require("body-parser");
const { cutEveryThirdLetterFromString } = require("./helpers")

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.post("/test", (request, response) => {
  const { string_to_cut } = request.body;

  if (!string_to_cut || typeof string_to_cut !== "string") {
    return response.status(400).json({
      status: "error",
      message: "Invalid request - required format: '{'string_to_cut': 'your string to cut'}'"
    });
  }

  let returnString = cutEveryThirdLetterFromString(string_to_cut);

  const responseToSend = {"return_string": returnString};

  response.json(responseToSend);
  response.statusCode = 201;
  response.end();
});

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Sorry - we can't find ${req.originalUrl}.`
  });
});

app.listen(PORT, () => console.log("Express server currently running on port ${PORT}"));
