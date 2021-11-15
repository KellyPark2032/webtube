// multiple export
export const trending = (req, res) => 
    // use variables
    res.render("home", {pageTitle: "Home"});
export const search = (req, res) => res.send("Search");

// request object has informations about request
export const see = (req, res) => res.render("watch", {pageTitle: "Watch"});
export const edit = (req, res) => res.render("Edit", {pageTitle: "Edit"});
export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
}
export const upload = (req, res) => res.send("Upload");