import React from 'react'
import CategoriesItem from './CategoriesItem'

export default function CategoriesList({catalog = []}) {
  return (
    <div className='list'>
        {catalog.map((el) => {
          return <CategoriesItem key={el.idCategory} {...el}/>
        })}
    </div>
  )
}
