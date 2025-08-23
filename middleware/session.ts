import session from 'express-session';
import dotenv from 'dotenv'
dotenv.config

export const sessionMiddleWare = session({
    name: "sid",
    secret: process.env.SESSION_SECRET || "fd58d10364009e72e90a5ecdc489927967a91a155190dc39ac3aff3da52e58ec",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 1000 * 60 * 60 * 8, //8hours
    }
}) 