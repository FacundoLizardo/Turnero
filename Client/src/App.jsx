import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Views/Home/Home";
import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
