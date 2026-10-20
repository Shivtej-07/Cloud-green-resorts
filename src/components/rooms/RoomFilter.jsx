import React from 'react';

export default function RoomFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-8">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-forest-800 text-cream-100 shadow-md font-semibold scale-105'
                : 'bg-white text-slate-700 hover:bg-cream-100 border border-slate-200/80 shadow-sm'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
