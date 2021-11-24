import Video from "../models/Video";
// multiple export
export const home = async (req, res) => {
	// {} => search terms : 비어있으면 모든 형식을 말함.
	const videos = await Video.find({});
	// console.log(videos);
	// use variables
	return res.render("home", { pageTitle: "Home", videos });
};

// request object has informations about request
export const watch = async (req, res) => {
	const { id } = req.params;
	const video = await Video.findById(id);
	if (!video) {
		return res.render("404", { pageTitle: "Video not found." });
	}
	return res.render("watch", { pageTitle: video.title, video });
};
export const getEdit = async (req, res) => {
	const { id } = req.params;
	const video = await Video.findById(id);
	if (!video) {
		return res.render("404", { pageTitle: "Video not found." });
	}
	return res.render("edit", { pageTitle: `Edit ${video.title}`, video });
};
export const postEdit = async (req, res) => {
	const { id } = req.params;
	const { title, description, hashtags } = req.body;
	// exists need filter such as 'Objects'
	const video = await Video.exists({ _id: id });
	if (!video) {
		return res.render("404", { pageTitle: "Video not found." });
	}
	await Video.findByIdAndUpdate(id, {
		title,
		description,
		hashtags: Video.formatHashtags(hashtags),
	});
	return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
	return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
	const { title, description, hashtags } = req.body;
	try {
		await Video.create({
			title: title,
			description: description,
			hashtags: Video.formatHashtags(hashtags),
		});
		return res.redirect("/");
	} catch (error) {
		return res.render("upload", {
			pageTitle: "Upload Video",
			errorMessage: error._message,
		});
	}
};
