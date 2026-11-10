import { Route, Routes } from "react-router";
import "./App.css";

import { MainFooter } from "./layout/MainFooter";
import { MainNavigation } from "./layout/MainNavigation";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Studio } from "./pages/Studio";
import { Work } from "./pages/Work";

function App() {
	return (
		<>
			<MainNavigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/work" element={<Work />} />
				<Route path="/services" element={<Services />} />
				<Route path="/studio" element={<Studio />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<MainFooter />
		</>
	);
}

export default App;
