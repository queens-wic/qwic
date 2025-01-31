import React from "react";

// made a diff filter bar for resources due to justification difference between our team and resources page
// Resources has 3 filters and Our Team has 7 filters

function FilterResources({ activeTag, handleTag, tagList }) {
  return (
    <div className="w-full flex flex-wrap gap-10 justify-center md:justify-start overflow-auto">
      {tagList.map((tag, i) => (
        <div
          onClick={() => handleTag(tag)}
          className={`py-1 px-4 cursor-pointer rounded-full border transition-all duration-200 
          ${
            activeTag === tag ? "border-black" : "bg-white border-transparent"
          } hover:border-black`}
          key={i}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

export default FilterResources;
