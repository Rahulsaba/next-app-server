import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20
        },
        userlast: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,

        },
        cpassword: {
            type: String,
            required: true,

        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        isActive: {
            type: Boolean,
            default: true
        },
        img: {
            type: String,
            
        },
       
        // phone: {
        //     type: String
        // }, address: {
        //     type: String
        // }
    },

    {
        time: { type: Date, default: Date.now }
        // timestamps: true,
        // updatedAt: 'updated_at'
    },
    {
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
)

export const User = mongoose?.models?.User || mongoose.model("User", userSchema)
