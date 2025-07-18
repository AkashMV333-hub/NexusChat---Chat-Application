import express  from 'express';
import { Server }  from "socket.io";
import http  from "http";
import cors  from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import contactsRoute from "./routes/contacts.js"

const app = express();
const server = http.createServer(app);

dotenv.config()

app.use(cors({
    origin: "https://nexus-chat-chat-application-5ym8.vercel.app/",  // Adjust to match frontend URL
    credentials: true,  // Allow credentials (cookies)
}));

const io = new Server(server, {
    cors: {
        origin: "https://nexus-chat-chat-application-5ym8.vercel.app/",
        methods: ["GET","POST"],
        credentials: true
    },
});

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoute);
app.use("/api",userRoute);
app.use("/api", contactsRoute);

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

const users = {}

io.on("connection", (socket) => {
    console.log(`web handshake is done ${socket.id}`);

    socket.on("login",(userId) => {
        users[userId] = socket.id;
        console.log(`users ${users[userId]}`)
    })

    socket.on("chatstarted", ({ receiverId, msg}) => {
        const resocId = users[receiverId];
        console.log(`receiver id ${resocId}`);
        io.to(resocId).emit("chatstarted", msg);
        console.log("io emitted event of broadcasting msg to all");
    });

    socket.on("disconnect", () => {
        console.log("socket is disconnected");
        for(let userId in users){
            if(users[userId] === socket.id){
                delete users[userId];
                break;
            }
        }
    })

});

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch(err) {
        throw err;
    }
}

mongoose.connection.on("connected", () => console.log("db is connected"));
mongoose.connection.on("disconnected", () => console.log("db is diconnected"));

server.listen(3001, () => {
    connect();
    console.log("server started!")
});