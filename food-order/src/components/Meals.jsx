import { useContext } from "react";
import { currencyFormatter } from "../util/formatter.js";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
const config = {};
export default function Meals() {

    const { data: loadMeals, isLoading, error, clearData, sendRequest } = useHttp('http://localhost:3000/meals', config, []);

    const cartCtx = useContext(CartContext);

    if (isLoading) {
        <p className="center">Fetching the data....</p>
    }
    if (error) {
        return <Error title="Failed to load Meals" message={error} />
    }
    function handleAddMealToCart(meal) {
        cartCtx.addItem(meal);
    }

    return (
        <ul id="meals">
            {loadMeals.map((meal) => (
                <li className="meal-item" key={meal.id}>
                    <article>
                        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                        <div>
                            <h3>{meal.name}</h3>
                            <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                            <p className="meal-item-description">{meal.description}</p>
                        </div>
                        <p className="meal-item-actions">
                            <Button onClick={() => handleAddMealToCart(meal)}>Add to Cart</Button>
                        </p>
                    </article>
                </li>
            ))}
        </ul>
    )



}