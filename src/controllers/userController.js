<<<<<<< HEAD
import User from "../models/User"

// multiple export
export const getJoin = (req, res) => res.render("createAccount", {pageTitle: "Join"});
export const postJoin = async (req, res) => {
    console.log(req.body);
    const {name, username, email, password, location} = req.body;
    await User.create({
        name, username, email, password, location,
    });
    return res.redirect("/login");
};
export const login = (req, res) => res.send("Login");
=======
import User from "../models/User";
import bcrypt from "bcrypt";

// multiple export
export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
	console.log(req.body);
	const { name, username, email, password, password2, location } = req.body;
	const pageTitle = "Join";
	if (password !== password2) {
		return res.status(400).passwordrender("join", {
			pageTitle,
			errorMessage: "Password confirm does not match.",
		});
	}
	//usernameExists
	const exists = await User.exists({ $or: [{ username }, { email }] });
	if (exists) {
		return res.status(400).render("join", {
			pageTitle,
			errorMessage: "This username/email is already taken.",
		});
	}

	try {
		await User.create({
			name,
			username,
			email,
			password,
			location,
		});
		return res.redirect("/login");
	} catch (error) {
		return res.status(400).render("join", {
			pageTitle: "Join Video",
			errorMessage: error._message,
		});
	}
};
export const getLogin = (req, res) =>
	res.render("login", { pageTitle: "Login" });
>>>>>>> 1e994d6392108d866be69dd7405e8c258dd10e78

export const postLogin = async (req, res) => {
	const { username, password } = req.body;
	const pageTitle = "Login";
	// check if account exists
	const user = await User.findOne({ username });
	if (!user) {
		return res.status(400).render("login", {
			pageTitle,
			errorMessage: "An account with this username does not exist.",
		});
	}
	console.log(user.password);
	// check if password correct
	const ok = await bcrypt.compare(password, user.password);
	if (!ok) {
		return res.status(400).render("login", {
			pageTitle,
			errorMessage: "Wrong password",
		});
	}
	console.log("LOG USER IN! COMING SOON!");
	return res.redirect("/");
};
export const see = (req, res) => res.send("See");
export const logout = (req, res) => res.send("Log Out");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
