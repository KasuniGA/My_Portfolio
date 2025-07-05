import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      // Create transporter for sending emails
      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.EMAIL_USER || "kasuniabeynayake01@gmail.com",
          pass: process.env.EMAIL_PASS || "your-app-password",
        },
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER || "kasuniabeynayake01@gmail.com",
        to: "kasuniabeynayake01@gmail.com",
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets", "KASUNI ABEYNAYAKE Resume_1751694382286.pdf");
      
      if (!fs.existsSync(resumePath)) {
        return res.status(404).json({ error: "Resume not found" });
      }

      res.download(resumePath, "Kasuni_Abeynayake_Resume.pdf", (err) => {
        if (err) {
          console.error("Error downloading resume:", err);
          res.status(500).json({ error: "Failed to download resume" });
        }
      });
    } catch (error) {
      console.error("Error downloading resume:", error);
      res.status(500).json({ error: "Failed to download resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
