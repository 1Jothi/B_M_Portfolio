import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors());

// ✅ Email Sending API
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // ✅ Configure Nodemailer Transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or App Password
      },
    });

    // ✅ Email Content
    let mailOptions = {
      from: email,
      to: "murugusanthosh.rs07@gmail.com", // Your email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // ✅ Send Email
    await transporter.sendMail(mailOptions);
    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
