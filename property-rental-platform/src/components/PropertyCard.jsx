import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ property, onBook }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
        <p className="text-gray-700 mb-4 flex-grow">{property.description}</p>
        <p className="text-lg font-medium text-gray-900 mb-4">
          Price: ${property.price}/night
        </p>
        <div className="flex justify-center mt-auto">
          <Link to="/cart">
            <button
              onClick={() => onBook(property)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-150 ease-in-out"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
