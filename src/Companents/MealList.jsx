import MealItem from "./MealItem";
function MealList(props) {
    const {meals = [] } = props;
  return (
    <div className="category">
    {(meals.map((el) => {
        return <MealItem {...el} />;
      })
    )}
  </div>
  )
}

export default MealList