import React, { useState } from "react";

const Gallery = () => {
  // function Gallery() {
  const [galleryResults, setGalleryResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovering, setIsHovering] = useState(-1);
  const [counter, setCounter] = useState(1);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const headers = {
        Authorization:
          "563492ad6f91700001000001af2ce6b9e9604a0d9bb5a673cafa3764"
      };
      const response = await fetch(
        `https://api.pexels.com/v1/curated?page=${counter}`,
        {
          headers
        }
      )
        .then(response => response.json())
        .then(data => setGalleryResults([...data.photos]));

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }

    setCounter(counter + 1);
  };


  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      <div class="wrapper">
        <div class="gallery-container">
          <ul class="gallery">
            {/* slice(0, 7) */}

            {galleryResults.map((post, index) => (
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
          <button className="button" onClick={handleClick}>Fetch data</button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
