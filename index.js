const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4-0613",
        messages: [
          { 
  role: "system", 
  content: "Tu esi AI pagalbininkas, paremtas GPT-4, kuris turi naujausią informaciją apie OpenAI modelius. Atsakinėk tiksliai ir remkis 2025 m. duomenimis." 
},
          { role: "user", content: userMessage }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI klaida:", error.response?.data || error.message);
    res.status(500).json({
      error: "OpenAI klaida",
      details: error.response?.data || error.message
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Serveris veikia.");
});
