import React, { useEffect, useState } from 'react'

export default function LeftAside() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then(res => res.json())
      .then(data => setCategories(data.data.news_category))
  }, [])
  return (
    <div className='border-2 rounded-lg px-2'>
      <h1 className='font-semibold text-center my-2'>All Caterogy</h1>
      <div className='flex flex-col gap-2 '>
        {
          categories.map((category) =>
            <button className='btn' key={category.category_id}>
              {category.category_name}</button>
          )
        }
      </div>
    </div>
  )
}
