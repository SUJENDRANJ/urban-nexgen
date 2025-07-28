const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const {
    full_name,
    company_name,
    phone,
    email,
    pickup,
    drop,
    travel_date,
    notes,
  } = req.body;

  const mailOptions = {
    from: `"${full_name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: "🚗 Urban Voyage Booking Request",
    html: `
      <h2>📩 New Booking Request</h2>
      <p><strong>Full Name:</strong> ${full_name}</p>
      <p><strong>Company:</strong> ${company_name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Pickup Location:</strong> ${pickup}</p>
      <p><strong>Drop Location:</strong> ${drop}</p>
      <p><strong>Travel Date:</strong> ${travel_date}</p>
      <p><strong>Notes:</strong> ${notes}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
