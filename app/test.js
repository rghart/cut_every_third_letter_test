const express = require("express");
const { cutEveryThirdLetterFromString } = require("./helpers");

const app = express();

app.use(express.json());

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

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
