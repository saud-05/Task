import React from "react";
import { ChevronUp, ChevronDown, Search } from "lucide-react";

const Filters = ({ cityFilter, sortOrder, onCityFilter, onSortUsers }) => {
  return (
    <div className="mb-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="relative flex-grow max-w-xs">
        <input
          type="text"
          placeholder="Filter by City"
          value={cityFilter}
          onChange={(e) => onCityFilter(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <Search className="absolute left-3 top-3 text-gray-500" size={20} />
      </div>

      <button
        onClick={onSortUsers}
        className="flex items-center px-6 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition duration-300"
      >
        Sort by Name
        {sortOrder === "asc" ? (
          <ChevronUp className="ml-2 text-gray-600" />
        ) : (
          <ChevronDown className="ml-2 text-gray-600" />
        )}
      </button>
    </div>
  );
};

export default Filters;
