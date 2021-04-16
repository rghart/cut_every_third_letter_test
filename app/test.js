import express from "express";
import helpers from "./helpers.js";

const app = express();
const { json } = express;
const { cutEveryThirdLetterFromString } = helpers;

app.use(json());

app.post("/test", (request, response) => {
  const { string_to_cut: stringToCut } = request.body;

  if (!stringToCut || typeof stringToCut !== "string") {
    return response.status(400).json({
      status: "error",
      message: "Invalid request - required format: '{'string_to_cut': 'your string to cut'}'"
    });
  }

  let returnString = cutEveryThirdLetterFromString(stringToCut);

  const responseToSend = {"return_string": returnString};

  response.statusCode = 201;
  response.end(JSON.stringify(responseToSend) + '\n');
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
