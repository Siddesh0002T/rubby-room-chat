const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config(); // Ensure you have dotenv installed and set up

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rubbysoft.co@gmail.com', 
    pass: 'wvug hwjq phdj vbuh' // Ensure this is kept secure in production
  }
});

// Initialize Gemini API
const API_KEY = process.env.API_KEY || 'YOUR_GEMINI_API_KEY';
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'rubbysoft.co@gmail.com',
    subject: `Rubby Room Chat Contact form submission from ${name}, ${email}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent successfully');
  });
});

// Endpoint to handle subscription
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: email,
    to: 'rubbysoft.co@gmail.com',
    subject: 'New Subscription',
    text: `New subscriber: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Subscription successful');
  });
});

// Endpoint to generate content using Gemini API
app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    res.json({ reply: text });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
