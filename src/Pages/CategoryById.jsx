import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsCard from '../Components/NewsCard'

export default function CategoryById() {
    const { data:news } = useLoaderData()
    console.log(news)
    return (
        <div>
            <h1 className='text-xl font-semibold'>Dragon News Home</h1>
            <p className='text-gray-500 py-2'> News Found On  This Category ({news.length})</p>

            <div>
                {
                    news.map((singleNews,index) => <NewsCard key={index} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    )
}