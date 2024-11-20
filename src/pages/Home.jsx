import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

function Home() {
	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFiltredCatalog] = useState([]);

	const { pathname, search } = useLocation();
	const navigate = useNavigate();

	const handelSearch = (str) => {
		setFiltredCatalog(
			catalog.filter((item) =>
				item.strCategory.toLowerCase().includes(str.toLowerCase())
			)
		);
		navigate({
			pathname,
			search: `?search=${str}`,
		});
	};

	useEffect(() => {
		getAllCategories().then((data) => {
			setCatalog(data.categories);
			setFiltredCatalog(
				search
					? data.categories.filter((item) =>
							item.strCategory
								.toLowerCase()
								.includes(search.split("=")[1].toLowerCase())
					  )
					: data.categories
			);
		});
	}, [search]);

	return (
		<>
			<Search cb={handelSearch} />
			{!catalog.length ? (
				<Preloader />
			) : (
				<CategoryList catalog={filteredCatalog} />
			)}
		</>
	);
}

export { Home };
