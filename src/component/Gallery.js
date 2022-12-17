import React, { useState, useEffect } from "react";
import { PostCssCalcOptions } from "postcss-calc";

const Gallery = () => {
  // function Gallery() {
  const [galleryResults, setGalleryResults] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = (event, index) => {
    console.log(event, index);
    setIsHovering(true);
  };

  const handleMouseOut = (event, index) => {
    setIsHovering(false);
  };

  // const [hover, setHover] = useState({})

  // const mouseOver = (event, index) => {
  // setHover(c => {
  //     return {
  //         ...c,
  //         [index]: true
  //     };
  // })
  // }

  // const mouseOut = (event, index) => {
  //     setHover(c => {
  //         return {
  //             ...c,
  //             [index]: false
  //         };
  //     })
  // }

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
        <div class="wrapper">
          <div class="gallery-container">
            <ul class="masonry-gallery">
              {/* slice(0, 7) */}

              {
                galleryResults.map((post, index) => (
                  <li key={post.id} >
                    <img key={index} onMouseEnter={(e) => {
                      handleMouseOver(e, index);
                    }}
                      onMouseLeave={(e) => {
                        handleMouseOut(e, index);
                      }} src={post.src.medium} />
                    {isHovering && (
                      <div key={post.id}>
                        <h2 id={index + 1}>{post.id}</h2>
                      </div>
                    )}
                  </li>

                  // <div 
                  //     key={index} 
                  // onMouseEnter={(e) => {
                  //     mouseOver(e, index);
                  // }} 
                  // onMouseLeave={(e) => {
                  //     mouseOut(e, index);
                  // }} 
                  //     className="flex gap-3"
                  // >
                  //     <div>
                  //         <h1>here</h1>
                  //     </div>
                  //     <div hidden={hover[index]}>
                  //         {post.photographer}
                  //     </div>
                  // </div>
                ))
              }

            </ul>
          </div>
        </div>
      </>
    )
  );
};

export default Gallery;
