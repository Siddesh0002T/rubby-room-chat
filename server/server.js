const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

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
    pass: 'wvug hwjq phdj vbuh' 
  }
});

// Endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'rubbysoft.co@gmail.com', // Replace with RubbySoft's email
    subject: `Rubby Room Chat Contact form submission from ${name} ,${email}`,
    text: message , 
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
    to: 'rubbysoft.co@gmail.com', // Replace with RubbySoft's email
    subject: `New Subscription`,
    text: `New subscriber: ${email}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Subscription successful');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//config server.js for send email to admin where email contain info of subscirbitons and contact page  