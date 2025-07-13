const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }]
  });

  res.json({ reply: response.data.choices[0].message.content });
});

module.exports = (req, res) => app(req, res);
