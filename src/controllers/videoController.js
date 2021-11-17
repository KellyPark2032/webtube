let videos = [
	{
		title: "First Video",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes age",
		views: 1,
		id: 1,
	},
	{
		title: "Second Video",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes age",
		views: 59,
		id: 2,
	},
	{
		title: "Third Video",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes age",
		views: 59,
		id: 3,
	},
];

// multiple export
export const trending = (req, res) => {
	// use variables
	return res.render("home", { pageTitle: "Home", videos });
};

// request object has informations about request
export const watch = (req, res) => {
	const { id } = req.params;
	// const id = req.params.id;
	const video = videos[id - 1];
	return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
	const { id } = req.params;
	const video = videos[id - 1];
	return res.render("edit", { pageTitle: `Editing : ${video.title}`, video });
};
export const postEdit = (req, res) => {};
