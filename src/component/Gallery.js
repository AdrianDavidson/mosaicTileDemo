import React, { useState, useEffect } from "react";
import { PostCssCalcOptions } from "postcss-calc";

const Gallery = () => {
  // function Gallery() {
  const [galleryResults, setGalleryResults] = useState([]);

  //   useEffect(async ()=>{
  //     // on page load stuff goes in ere
  //     const headers = {
  //       Authorization: "563492ad6f91700001000001af2ce6b9e9604a0d9bb5a673cafa3764"
  //     };
  //     const apiResponse = await fetch(
  //       "https://api.pexels.com/v1/search?query=people",
  //       { headers }
  //     );
  //     const apiResponseJSON = await apiResponse.json();
  //     const photos = apiResponseJSON.photos;
  //     console.log(photos);
  //     setGalleryResults(...photos);
  //   }, []);

  useEffect(() => {
    const headers = {
      Authorization: "563492ad6f91700001000001af2ce6b9e9604a0d9bb5a673cafa3764"
    };
    const test = fetch("https://api.pexels.com/v1/search?query=technology", {
      headers
    })
      .then(response => response.json())
      .then(data => setGalleryResults([...data.photos]));
  }, []);

  return (
    console.log(galleryResults),
    (
      <>
        <h1>Gallery</h1>
        <div class="wrapper">
        <div class="gallery-container">
          <ul class="masonry-gallery">
              {/* slice(0, 7) */}
            {galleryResults.slice(0, 7).map(post => {
              return (
                <li>
                  <img src={post.src.medium} />
                </li>
              );
            })}
          </ul>
        </div>
        </div>
      </>
    )
  );
};

export default Gallery;
