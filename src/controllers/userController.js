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
	req.session.loggedIn = true;
	req.session.user = user;
	return res.redirect("/");
};
export const startGithubLogin = (req, res) => {
	const baseUrl = 'https://github.com/login/oauth/authorize';
	const config = {
		client_id: '3f0f9d26bcbabf47f158',
		allow_signup: false,
		scope: "read:use user:email"
	};
	const params = new URLSearchParams(config).toString();
	const finalUrl = `${baseUrl}?${params}`;
	return res.redirect(finalUrl);
}

export const finishGithubLogin = (req, res) => {

}

export const logout = (req, res) => res.send("Log Out");

export const getEdit = (req, res) => {
	return res.render("edit-profile", { pageTitle: "Edit Profile" });
}
export const postEdit = (req, res) => {
	// never save files in DB
	const session: {
		user: { _id, avatarUrl },
	}, body: { name, email, username, location },
		file,
} = req;
console.log(path);
const updateUser = await User.findByIdAndUpdate(
	_id,
	{
		avatarURl: file ? file.path : avatarUrl,
		name,
		email,
		username,
		location,
	},
	{ new: true }
);
cosole.log(file);
export const edit = (req, res) => { res.send("Edit User"); }
export const see = (req, res) => res.send("See");
