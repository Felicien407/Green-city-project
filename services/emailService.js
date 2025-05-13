// services/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    // If using Gmail and still having issues, you might need to allow less secure apps
    // or ensure your App Password is correct. For other services, check their specific requirements.
    // tls: {
    //     rejectUnauthorized: false // Only use for development if you have self-signed certs
    // }
});

const sendVerificationEmail = async (to, token) => {
    const verificationLink = `${process.env.APP_BASE_URL}/api/auth/verify-email?token=${token}`;

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: to,
        subject: 'Verify Your Email Address for Green City Project',
        html: `
            <p>Hello,</p>
            <p>Thank you for registering with Green City Project!</p>
            <p>Please click the link below to verify your email address:</p>
            <a href="${verificationLink}">${verificationLink}</a>
            <p>If you did not create an account, please ignore this email.</p>
            <p>This link will expire in 1 hour.</p>
            <br>
            <p>Thanks,</p>
            <p>The Green City Project Team</p>
        `,
        text: `
            Hello,\n
            Thank you for registering with Green City Project!\n
            Please copy and paste the following link into your browser to verify your email address:\n
            ${verificationLink}\n
            If you did not create an account, please ignore this email.\n
            This link will expire in 1 hour.\n\n
            Thanks,\nThe Green City Project Team
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Verification email sent to:', to);
    } catch (error) {
        console.error('Error sending verification email:', error);
        throw new Error('Could not send verification email.');
    }
};

module.exports = { sendVerificationEmail };
