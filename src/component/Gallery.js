import React, { useState, useEffect } from "react";
import FetchMoreButton from "../component/FetchMoreButton";
const Gallery = () => {
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
    (
      <>
        <div class="wrapper">
          <div class="gallery-container">
            <ul class="gallery">
              <div className="title">
                <h3>Connect people & spaces</h3>
              </div>
              {galleryResults.slice(0, 7).map((post, index) => (
                <li
                  className="parent"
                  key={index}
                  onMouseEnter={() => setIsHovering(index)}
                  // -1 means no index is available (starts at 0)
                  onMouseLeave={() => setIsHovering(-1)}
                >
                  {/* conditionally hide and show the info needed */}
                  <div className="overText">Photo ID: {post.id}</div>

                  <div
                    className={`${isHovering === index ? "visible" : "hidden"}`}
                  >
                    {post.photographer}
                    <br />
                    <div className="description">{post.alt}</div>
                  </div>

                  <div className="overTextarrow">
                    <span class="material-symbols-outlined">chevron_right</span>
                  </div>

                  <img alt="test" src={post.src.medium} />
                </li>
              ))}
            </ul>
            <FetchMoreButton></FetchMoreButton>
          </div>
        </div>
      </>
    )
  );
};

export default Gallery;
