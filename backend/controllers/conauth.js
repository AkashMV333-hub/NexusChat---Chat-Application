import User from "../models/User.js"
import bcrypt from "bcrypt"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const createUser = async (req,res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash,
        });
        await newUser.save();
        res.status(200).json({ msg : "Successfully registered"});
    } catch(err) {
        next(err);
    }
};

export const loginUser = async (req,res,next) => {
    try{
        const user = await User.findOne({ userId: req.body.userId });
        if(!user) return next(createError(404,"User not found"));

        const isPasswordCrt = await bcrypt.compare(
            req.body.password,
            user.password
        )

        if(!isPasswordCrt) return next(createError(400,"Wrong password or userId"));

        const token = jwt.sign(
            { id: user._id , isAdmin: user.isAdmin },
            process.env.JWT
        )
        const {  password, isAdmin, ...otherDetails } = user._doc;

        res.cookie("access_token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Lax"
        }).status(200).json({ details: {...otherDetails} });
    } catch(err) {
        next(err);
    }
};