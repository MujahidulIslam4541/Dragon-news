
import { useLoaderData } from 'react-router-dom'
import NewsCard from '../Components/NewsCard'

export default function CategoryById() {
    const { data:news } = useLoaderData()
    return (
        <div>
            <h1 className='text-xl font-semibold'>Dragon News Home</h1>
            <p className='text-gray-500 py-2'> News Found On  This Category ({news.length})</p>

        {/* single news mapping */}
            <div>
                {
                    news.map((singleNews,index) => <NewsCard key={index} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    )
}
