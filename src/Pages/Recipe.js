/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import { getMealById } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Companents/Loader";

function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, []);
  console.log(recipe);

  return (
    <div className="container">
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Loader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>

          <h6>
            <b>Category:</b> {recipe.strCategory}
          </h6>
          
          {recipe.strArea ? (
            <h6>
              <b>Area:</b> {recipe.strArea}
            </h6>
          ) : null}

          <p>{recipe.strInstructions}</p>
          {/* Recipe Vedio */}
          {recipe.strYoutube ? (
            <div className="row">
              <h1>Video Recipe</h1>
              <iframe
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
                title={id}
              ></iframe>
            </div>
          ) : null}
        </div>
      )}
      {/* recipe */}
      <table className="centred">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(recipe).map((key) => {
            if (key.includes('Ingredient') && recipe[key]) {
              return (
                <tr>
                  <td>{recipe[key]}</td>
                  <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Recipe;
