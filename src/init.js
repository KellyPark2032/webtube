import "./db";
import "./models/Video";
import "./models/User";
<<<<<<< HEAD
import app from "./server"

=======
import app from "./server";
>>>>>>> 1e994d6392108d866be69dd7405e8c258dd10e78

const PORT = 4000;

const handleListening = () =>
	console.log(`✅ Server listening on port ${PORT}`);

// we have to make listen application
app.listen(PORT, handleListening);
