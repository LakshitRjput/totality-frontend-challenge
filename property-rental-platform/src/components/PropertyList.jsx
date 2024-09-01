

import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import properties from '../properties.json';

function PropertyList({ onBook }) {
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [priceRangeFilter, setPriceRangeFilter] = useState([0, 500]);
  const [bedroomsFilter, setBedroomsFilter] = useState(0);
  const [amenitiesFilter, setAmenitiesFilter] = useState([]);

  const filteredProperties = properties.filter(property => {
    if (locationFilter !== 'All Locations' && property.location !== locationFilter) {
      return false;
    }
    if (property.price < priceRangeFilter[0] || property.price > priceRangeFilter[1]) {
      return false;
    }
    if (bedroomsFilter > 0 && property.bedrooms < bedroomsFilter) {
      return false;
    }
    if (amenitiesFilter.length > 0 && !amenitiesFilter.every(amenity => property.amenities.includes(amenity))) {
      return false;
    }
    return true;
  });

  return (
    
    <div className="property-list flex flex-col md:flex-row">
      
      <div className="filters p-4 bg-gray-100 rounded-lg mb-4 shadow-md w-full md:w-1/4">
        <h3 className="text-xl font-semibold mb-2">Filters</h3>
        <div className="filter-group mb-2">
          <label className="block mb-1 font-medium">Location:</label>
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="p-2 border rounded w-full"
          >
            <option value="All Locations">All Locations</option>
            <option value="Delhi">Delhi</option>
            <option value="Greater Noida">Greater Noida</option>
            <option value="Hariyana">Hariyana</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Punjab">Punjab</option>
            <option value="Kashmir">Kashmir</option>
            <option value="Dehradun">Dehradun</option>
            <option value="Assam">Assam</option>
          </select>
        </div>
        <div className="filter-group mb-2">
          <label className="block mb-1 font-medium">Price Range:</label>
          <input
            type="number"
            value={priceRangeFilter[0]}
            onChange={(e) => setPriceRangeFilter([Number(e.target.value), priceRangeFilter[1]])}
            className="p-2 border rounded mr-2"
          />
          to
          <input
            type="number"
            value={priceRangeFilter[1]}
            onChange={(e) => setPriceRangeFilter([priceRangeFilter[0], Number(e.target.value)])}
            className="p-2 border rounded ml-2"
          />
        </div>
        <div className="filter-group mb-2">
          <label className="block mb-1 font-medium">Bedrooms:</label>
          <input
            type="number"
            value={bedroomsFilter}
            onChange={(e) => setBedroomsFilter(Number(e.target.value))}
            className="p-2 border rounded"
          />
        </div>
        <div className="filter-group mb-2">
          <label className="block mb-1 font-medium">Amenities:</label>
          <select
            multiple
            value={amenitiesFilter}
            onChange={(e) => setAmenitiesFilter([...e.target.selectedOptions].map(option => option.value))}
            className="p-2 border rounded w-full"
          >

            <option value="Wi-Fi">Wi-Fi</option>
            <option value="Air Conditioning">Air Conditioning</option>
            <option value="Fireplace">Fireplace</option>
            <option value="Garden">Garden</option>
            <option value="Pool">Pool</option>
            <option value="Ocean View">Ocean View</option>
            <option value="Hot Tub">Hot Tub</option>
            <option value="Barbecue Grill">Barbecue Grill</option>
            <option value="Gym">Gym</option>
            <option value="Rooftop Terrace">Rooftop Terrace</option>
            <option value="Balcony">Balcony</option>
            <option value="Modern Kitchen">Modern Kitchen</option>
            <option value="Library">Library</option>
            <option value="Ornamental Gardens">Ornamental Gardens</option>
            <option value="Exposed Brick">Exposed Brick</option>
            <option value="Art Studio">Art Studio</option>
            <option value="Private Garden">Private Garden</option>
          </select>
        </div>
      </div>

      
      <div className="property-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-3/4">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} onBook={onBook} />
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
