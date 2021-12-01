export const localsMiddleware = (req, res, next) => {
	console.log(req.session, req.sessionID);
	res.locals.loggedIn = Boolean(req.session.loggedIn);
	res.locals.siteName = "Webtube";
	res.locals.loggedInUser = req.session.user;
	console.log(res.locals);
	next();
};
