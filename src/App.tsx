import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/:shortCode" element={<Redirect />} />
		</Routes>
	);
}

export default App;
