import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar?: string;
    role: "user" | "admin";
    organization?: mongoose.Types.ObjectId;
    status: "active" | "inactive" | "banned";
    lastLogin?: Date;
    createdAt: Date;
    updatedAt: Date;
};

const UserSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        requeired: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }
})