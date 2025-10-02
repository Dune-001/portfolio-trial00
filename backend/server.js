const http = require('http');
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

console.log('🚀 Starting pure Node.js backend server...');

// Create email transporter (using Ethereal for testing)
const transporter = nodemailer.createTransport({
  //host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
  //port: process.env.EMAIL_HOST || 587,
  //secure: false,
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test email configuration
transporter.verify((error) => {
  if (error) {
    console.log('❌ Email configuration error:', error.message);
  } else {
    console.log('✅ Email server is ready to send messages');
    console.log('Using email:', process.env.EMAIL_USER);
  }
});

// Create HTTP server
const server = http.createServer(async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Parse URL
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  const method = req.method;

  console.log(`📨 ${method} ${pathname}`);

  // Health check endpoint
  if (pathname === '/api/health' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      message: 'Backend server is running perfectly!',
      timestamp: new Date().toISOString(),
      service: 'Pure Node.js HTTP Server'
    }));
    return;
  }

  // Contact form endpoint
  if (pathname === '/api/contact' && method === 'POST') {
    let body = '';

    // Collect request data
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const { name, email, subject, message } = data;

        console.log('📧 Received contact form:', { name, email, subject });

        // Validate required fields
        if (!name || !email || !subject || !message) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: false,
            message: 'All fields are required'
          }));
          return;
        }

        // Send email
        const mailOptions = {
          from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          replyTo: email,
          subject: `Portfolio Contact: ${subject}`,
          text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
          `.trim(),
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #3b82f6;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <p style="color: #6b7280; font-size: 12px; text-align: center;">
                Sent from portfolio contact form on ${new Date().toLocaleString()}
              </p>
            </div>
          `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully:', info.messageId);


        // If using Ethereal, show preview URL
        if (process.env.EMAIL_SERVICE === 'ethereal') {
          console.log('📨 Preview URL:', nodemailer.getTestMessageUrl(info));
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
          messageId: info.messageId
        }));

      } catch (error) {
        console.error('❌ Email error:', error);

        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          message: 'Failed to send message. Please try again later.',
          error: process.env.NODE_ENV === 'development' ? error.message : undefined
        }));
      }
    });
    return;
  }

  // 404 - Route not found
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    success: false,
    message: 'Route not found. Available routes: /api/health, /api/contact'
  }));
});

// Start server
server.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
  console.log(`📧 Email service: ${process.env.EMAIL_SERVICE || 'ethereal'}`);
  console.log(`🌐 CORS enabled for: ${process.env.CLIENT_URL || 'all origins'}`);
  console.log(`🔗 Available endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/api/health`);
  console.log(`   POST http://localhost:${PORT}/api/contact`);
});

// Handle server errors
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`❌ Port ${PORT} is already in use. Please use a different port.`);
    console.log(`💡 Change the PORT in your .env file`);
  } else {
    console.log('❌ Server error:', error.message);
  }
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server gracefully...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});