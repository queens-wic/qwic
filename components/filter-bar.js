import React from "react";

function Filter({ activeTag, handleTag, tagList }) {
  return (
    <div className="w-[full] flex flex-row justify-between">
      {tagList.map((tag, i) => (
        <div
          onClick={() => handleTag(tag)}
          className={`py-1 px-4 cursor-pointer rounded-full border transition-all duration-200 
          ${
            activeTag === tag
              ? "border-black" // Active state
              : "bg-white border-transparent"
          } hover:border-black`}
          key={i}
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Filter;
