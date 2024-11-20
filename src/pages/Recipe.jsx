import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe() {
	const [recipe, setRecipe] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getMealById(id).then((data) => setRecipe(data.meals[0]));
	}, [id]);

	return (
		<>
			<button onClick={() => navigate(-1)} className="btn">
				Go back
			</button>
			{!recipe.idMeal ? (
				<Preloader />
			) : (
				<div className="recipe">
					<img src={recipe.strMealThumb} alt={recipe.strMeal} />
					<h1>{recipe.strMeal}</h1>
					<h6>Category: {recipe.strCategory}</h6>
					{recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
					<p>{recipe.strInstructions}</p>

					<table className="centered">
						<thead>
							<tr>
								<th>Ingredient</th>
								<th>Measure</th>
							</tr>
						</thead>
						<tbody>
							{Object.keys(recipe).map((key) => {
								if (key.includes("Ingredient") && recipe[key]) {
									return (
										<tr key={key}>
											<td>{recipe[key]}</td>
											<td>
												{
													recipe[
														`strMeasure${key.slice(
															13
														)}`
													]
												}
											</td>
										</tr>
									);
								}
								return null;
							})}
						</tbody>
					</table>

					{recipe.strYoutube ? (
						<div className="row">
							<h5>Video Recipe</h5>
							<iframe
								title={id}
								src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
									-11
								)}`}
								allowFullScreen
							/>
						</div>
					) : null}
				</div>
			)}
		</>
	);
}

export { Recipe };
