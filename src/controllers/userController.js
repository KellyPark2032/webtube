import User from "../models/User";

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

	await User.create({
		name,
		username,
		email,
		password,
		location,
	});
	return res.redirect("/login");
};
export const login = (req, res) => res.send("Login");

export const see = (req, res) => res.send("See");
export const logout = (req, res) => res.send("Log Out");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
