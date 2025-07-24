"use client";
import { useRef } from "react";
import Masonry from "react-masonry-css";

// CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

const imageList = [
  "/assets/gallery/spinco.jpeg",
  "/gallery/hackher.jpeg",
  "https://images.unsplash.com/photo-1605973029521-8154da591bd7",
  "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a",
  "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5",
  "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2",
  "https://images.unsplash.com/photo-1477322524744-0eece9e79640",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  "https://images.unsplash.com/photo-1585338447937-7082f8fc763d",
  "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e",
];

const MasonryLightGallery = () => {
  const galleryRef = useRef(null);

  const breakpoints = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <div ref={galleryRef} className="px-16">
      <Masonry
        breakpointCols={breakpoints}
        className="flex gap-6"
        columnClassName="masonry-column"
      >
        {imageList.map((img, index) => (
          <div key={index} className="block mb-6">
            <img
              src={
                img.startsWith("http")
                  ? `${img}?auto=format&fit=crop&w=600&q=80`
                  : img
              }
              alt={`Gallery image ${index}`}
              className="w-full rounded-lg shadow-md transition-transform hover:scale-[1.01]"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryLightGallery;
