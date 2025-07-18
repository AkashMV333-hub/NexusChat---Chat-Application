import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contacts: {
        type: [String]
    },
    profilePic: {
        type: String,
        Value: "..../public/logo192.png"
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model('chatusers', UserSchema);
