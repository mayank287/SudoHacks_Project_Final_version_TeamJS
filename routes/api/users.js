require('dotenv').config();
const express = require('express');
const router = express.Router();
const gravtar = require('gravatar');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendregisteruser = require("../../utils/mail")
const User = require('../../models/User');

// @route   Post api/user
// @desc    Register USer
// @access  Public
router.post('/',
[
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password min 6 to 10 charcters').isLength({ min: 6 })
],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
        // See if user exists
        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        // Get User gravtar

        const avatar = gravtar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        user = new User({ 
            name,
            email,
            avatar,
            password
        });

        // Encrypt password

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        //Return jsonwebtoken

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, process.env.jwtSecret,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
            const message = ` ${name} Welcome To CureMe And Congrats For Becoming CureMe Family Memeber 
                     
            
            `
            
            
            await sendregisteruser({
                email: email,
                subject:` ${name} Welcome To CureMe `,
                message,
            })
            

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;