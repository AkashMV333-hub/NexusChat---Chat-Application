import User from "../models/User.js"

export const updateUser = async (req,res,next) => {
    try {
        const updateduser = await User.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateduser); 
    } catch(err) {
        next(err)
    }
}

export const deleteUser = async (req,res,next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: "Deleted successfully"}); 
    } catch(err) {
        next(err)
    }
}

export const getUser = async (req,res,next) => {
    try {
        const gotuser = await User.findById(req.params.id);
        res.status(200).json(gotuser);
    } catch(err) {
        next(err)
    }
}

export const getAllUsers = async (req,res,next) => {
    try {
        const gotallusers = await User.find();
        res.status(200).json(gotallusers); 
    } catch(err) {
        next(err)
    }
}

