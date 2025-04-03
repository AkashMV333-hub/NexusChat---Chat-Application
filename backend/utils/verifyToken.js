import jwt from "jsonwebtoken"
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {

    if (!req.cookies) {
        console.error("🚨 req.cookies is undefined! Check if cookie-parser is used correctly.");
        return res.status(401).json({ message: "No cookies found" });
    }

    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "No token found"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is invalid"));
        req.user = user;
        next();
    });
};

export const verifyUser = (req,res,next) => {
    verifyToken(req,res,next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        } else {
            return next(createError(403,"You are not authorized"));
        }
    })
}

export const verifyAdmin = (req,res,next) => {
    verifyToken(req,res,next, () => {
        if(req.user.isAdmin === true){
            next();
        } else {
            return next(createError(403, "You are not authorized"));
        }
    })
}