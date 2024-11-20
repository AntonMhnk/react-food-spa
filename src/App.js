import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Categoty } from "./components/Category";
import { NotFound } from "./pages/NotFound";
import { Recipe } from "./pages/Recipe";

function App() {
	return (
		<>
			<Router basename="/react-food-spa">
				<div className="App">
					<Header />
					<main className="container content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/meal/:id" element={<Recipe />} />
							<Route
								path="/category/:name"
								element={<Categoty />}
							/>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		</>
	);
}

export default App;
