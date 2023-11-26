import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = import.meta.env.BACKEND_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
	<Suspense>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Suspense>
);
