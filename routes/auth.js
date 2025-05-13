const express = require('express');
const crypto = require('crypto'); // for generating tokens
const User = require('../models/User'); // Corrected path
const { sendVerificationEmail } = require('../services/emailService'); // Adjust path if needed
const bcrypt = require('bcryptjs');;
// const jwt = require('jsonwebtoken');

const jwt = require('jsonwebtoken');
const router = express.Router();
// const bcrypt = require('bcryptjs');

router.get('/signup', async (req, res) => {
    try {
        // Example: Display a success message after registration
        res.status(200).send('<h1>Registration Successful!</h1><p>You have been successfully registered. Please check your email to verify your account.</p>');
    } catch (error) {
        console.error('Error in GET /signup:', error);
        res.status(500).send('<h1>Server Error</h1><p>Something went wrong. Please try again later.</p>');
    }
});

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
    const { name, email, number, password } = req.body;

    try {
        // 1. Check if user already exists
        let user = await User.findOne({ email }); // Corrected to findOne
        if (user) {
            // If user exists but is not verified, resend verification
            if (!user.isVerified) {
                // Generate new token
                const verificationToken = crypto.randomBytes(32).toString('hex');
                user.emailVerificationToken = verificationToken;
                user.emailVerificationTokenExpires = Date.now() + 60*5; // 1 hour
                await user.save({ validateBeforeSave: false }); // Skip password re-hashing if not changed

                await sendVerificationEmail(user.email, verificationToken);
                return res.status(200).json({
                    message: 'User already exists. A new verification email has been sent. Please check your inbox.',
                });
            }
            return res.status(400).json({ message: 'User with this email already exists and is verified.' });
        }

        // 2. Create new user (password will be hashed by pre-save hook in User model)
        user = new User({
            name,
            email,
            number,
            password,
        });

        // 3. Generate verification token
        const verificationToken = crypto.randomBytes(32).toString('hex');
        user.emailVerificationToken = verificationToken;
        user.emailVerificationTokenExpires = Date.now() + 3600000; // 1 hour from now

        await user.save();

        // 4. Send verification email
        await sendVerificationEmail(user.email, verificationToken);

        res.status(201).json({
            message: 'User registered successfully! Please check your email to verify your account.',
        });

    } catch (error) {
        console.error('Signup Error:', error);
        if (error.name === 'ValidationError') {
            // Extract Mongoose validation errors
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ message: messages.join(', ') });
        }
        res.status(500).json({ message: 'Server error during registration. ' + error.message });
    }
});

// GET /api/auth/verify-email?token=YOUR_TOKEN
router.get('/verify-email', async (req, res) => {
    const { token } = req.query;

    if (!token) {
        return res.status(400).json({ message: 'Verification token is missing.' });
    }

    try {
        const user = await User.findOne({
            emailVerificationToken: token,
            emailVerificationTokenExpires: { $gt: Date.now() }, // Check if token is not expired
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired verification token. Please try registering again or request a new token.' });
        }

        user.isVerified = true;
        user.emailVerificationToken = undefined; // Clear the token
        user.emailVerificationTokenExpires = undefined; // Clear expiry
        await user.save({ validateBeforeSave: false }); // Avoid re-validating everything if not needed

        // You can redirect to a "verified successfully" page or login page
        // res.redirect('/login?verified=true');
        res.status(200).json({ message: 'Email verified successfully! You can now log in.' });

    } catch (error) {
        console.error('Email Verification Error:', error);
        res.status(500).json({ message: 'Server error during email verification.' });
    }
});

// (Optional) Route to resend verification email
router.post('/resend-verification', async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        if (user.isVerified) {
            return res.status(400).json({ message: 'This account is already verified.' });
        }

        // Generate new token
        const verificationToken = crypto.randomBytes(32).toString('hex');
        user.emailVerificationToken = verificationToken;
        user.emailVerificationTokenExpires = Date.now() + 18000; // 1 hour
        await user.save({ validateBeforeSave: false });

        await sendVerificationEmail(user.email, verificationToken);

        res.status(200).json({ message: 'Verification email resent. Please check your inbox.' });

    } catch (error) {
        console.error('Resend Verification Error:', error);
        res.status(500).json({ message: 'Server error while resending verification email.' });
    }
});
 // Password Reset 
router.post('/reset-password', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordTokenExpires = Date.now() + 3600000; // 1 hour
        await user.save({ validateBeforeSave: false });

        // Send reset email
        await sendVerificationEmail(user.email, resetToken, 'reset'); // Adjust email template logic if needed

        res.status(200).json({ message: 'Password reset email sent. Please check your inbox.' });
    } catch (error) {
        console.error('Reset Password Error:', error);
        res.status(500).json({ message: 'Server error during password reset.' });
    }
});

// Password Update
router.post('/update-password', async (req, res) => {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
        return res.status(400).json({ message: 'Token and new password are required.' });
    }

    try {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordTokenExpires: { $gt: Date.now() }, // Check if token is valid
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired token.' });
        }

        // Update password
        user.password = newPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpires = undefined;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully.' });
    } catch (error) {
        console.error('Update Password Error:', error);
        res.status(500).json({ message: 'Server error during password update.' });
    }
});


//Profile Managament

router.get('/profile', async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); // Exclude password
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Fetch Profile Error:', error);
        res.status(500).json({ message: 'Server error while fetching profile.' });
    }
});



//updates the user logged profile


router.put('/profile', async (req, res) => {
    const { name, email, number } = req.body;

    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Update fields
        if (name) user.name = name;
        if (email) user.email = email;
        if (number) user.number = number;

        await user.save();
        res.status(200).json({ message: 'Profile updated successfully.', user });
    } catch (error) {
        console.error('Update Profile Error:', error);
        res.status(500).json({ message: 'Server error while updating profile.' });
    }
});


// Logout USer

router.post('/logout', (req, res) => {
    // Invalidate token on the client side (e.g., remove it from storage)
    res.status(200).json({ message: 'Logged out successfully.' });
});

//Refersh-Token using JWT token

router.post('/refresh-token', async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(400).json({ message: 'Refresh token is required.' });
    }

    try {
        // Verify refresh token
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Issue new token
        const newToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token: newToken });
    } catch (error) {
        console.error('Refresh Token Error:', error);
        res.status(500).json({ message: 'Server error during token refresh.' });
    }
});



module.exports = router;
