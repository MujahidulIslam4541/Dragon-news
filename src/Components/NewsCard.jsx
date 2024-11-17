import React from "react";
import { FaRegStar, FaEye, FaShareAlt, FaHeart } from "react-icons/fa";

const NewsCard = ({ singleNews }) => {
  const {
    author,
    title,
    image_url,
    details,
    rating,
    total_view,
    published_date,
  } = singleNews;

  return (
    <div className="p-2 bg-white rounded-lg border shadow-lg">
      {/* Author Section */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500 italic">{published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaHeart className="text-gray-600 cursor-pointer hover:text-red-500" />
          <FaShareAlt className="text-gray-600 cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Image */}
      <img
        src={image_url}
        alt="news-thumbnail"
        className="w-full h-48 rounded-lg object-cover"
      />

      {/* Title and Description */}
      <div className="p-4">
        <h2 className="font-bold text-lg leading-snug">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">
          {details.slice(0, 120)}...
          <span className="text-blue-500 cursor-pointer"> Read More</span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 border-t">
        <div className="flex items-center text-yellow-500">
          <FaRegStar />
          <span className="ml-1 font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaEye />
          <span className="ml-1 text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
