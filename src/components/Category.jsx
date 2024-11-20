import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";

import { Preloader } from "./Preloader";
import { MealList } from "./MealList";

function Categoty() {
	const { name } = useParams();
	const [meals, setMeals] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		getFilteredCategory(name).then((data) => setMeals(data.meals));
	}, [name]);

	return (
		<>
			<button onClick={() => navigate(-1)} className="btn">
				Go back
			</button>
			{!meals.length ? <Preloader /> : <MealList meals={meals} />}
		</>
	);
}

export { Categoty };
