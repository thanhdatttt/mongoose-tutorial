import { connectDB } from "../db.js";
import User from "../models/User.js";

export const up = async() => {
    await connectDB();
    console.log("Adding phone field ...");

    await User.updateMany({}, {$set: {phone: 0} });

    console.log("Add phone field successfully");
    process.exit();
}

export const down = async() => {
    await connectDB();
    console.log("Removing phoen field ...");

    await User.updateMany({}, {$unset: {phone: ""} });
    
    console.log("Remove phone field successfully");
    process.exit();
}