import React, { useState, useEffect } from "react";
import FetchMoreButton from "../component/FetchMoreButton";
const Gallery = () => {
  // function Gallery() {
  const [galleryResults, setGalleryResults] = useState([]);
  const [isHovering, setIsHovering] = useState(-1);

  useEffect(() => {
    const headers = {
      Authorization: "563492ad6f91700001000001af2ce6b9e9604a0d9bb5a673cafa3764"
    };
    fetch("https://api.pexels.com/v1/search?query=technology", {
      headers
    })
      .then(response => response.json())
      .then(data => setGalleryResults([...data.photos]));
  }, []);

  return (
    <>
      <div class="wrapper">
        <div class="gallery-container">
          <ul class="masonry-gallery">
            {galleryResults.slice(0, 7).map((post, index) => (
              <li
                className="parent"
                key={index}
                onMouseEnter={() => setIsHovering(index)}
                // -1 means no index is available (starts at 0)
                onMouseLeave={() => setIsHovering(-1)}
              >
                {/* conditionally hide and show the info needed */}

                <div
                  className={`${isHovering === index ? "visible" : "hidden"}`}
                >
                  photographer: {post.photographer}
                  <br />
                  Description: {post.alt}
                </div>

                <img alt="test" src={post.src.medium} />
              </li>
            ))}
          </ul>
          <FetchMoreButton></FetchMoreButton>
        </div>
      </div>
    </>
  );
};

export default Gallery;
