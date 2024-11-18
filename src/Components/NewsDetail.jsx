import { Link, useLoaderData } from "react-router-dom"

export default function NewsDetail() {
    const data = useLoaderData()
    const news = data.data[0]
    const {
        title,
        image_url,
        details,
    } = news;
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={image_url}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                        <Link to={`/`} className="btn btn-primary">Back to Category</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
