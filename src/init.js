import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
	console.log(`✅ Server listening on port ${PORT}`);

// we have to make listen application
app.listen(PORT, handleListening);
