<<<<<<< HEAD
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true },
    name: {type: String, required: true},
    location: String,
})

const User = mongoose.model("User", userSchema);
export default User;
=======
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	location: String,
});

userSchema.pre("save", async function () {
	// console.log("Users password : ", this.password);
	this.password = await bcrypt.hash(this.password, 5);
	// console.log("Hashed password : ", this.password);
});

const User = mongoose.model("User", userSchema);

export default User;
>>>>>>> 1e994d6392108d866be69dd7405e8c258dd10e78
