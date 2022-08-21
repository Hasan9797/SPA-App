import { Link } from "react-router-dom"
function CategoriesItem(props) {
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props
  return (
    <div>
        <div className="card" key={idCategory}>
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory}/>
        </div>
        <div className="card-content">
          <span className="card-title"><b>{strCategory}</b></span>
          <p>{strCategoryDescription.slice(0, 60)}...</p>
        </div>
        <div className="card-action">
          <Link to={`/category/${strCategory}`} className="btn">Watch Category</Link>
        </div>
      </div>
    </div>
  )
}

export default CategoriesItem