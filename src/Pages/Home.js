import { useEffect, useState } from "react";
import { getAllMealCategories } from "../api";
import CategoriesList from "../Companents/CategoriesList";
import Loader from "../Companents/Loader"

export default function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllMealCategories().then((data) => {
      setCatalog(data.categories);
    }, []);
  });
  return <div>
    {!catalog.length ? <Loader/> : <CategoriesList catalog={catalog} /> }
  </div>;
}
