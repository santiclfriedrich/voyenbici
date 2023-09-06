import { useState, useEffect } from "react";

function useSlider(images) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getCurrentImage = () => {
    return images[currentImageIndex];
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(intervalId); 
    };
  }, [images.length]);

  return {
    currentImageIndex,
    setCurrentImageIndex,
    getCurrentImage,
  };
}

export default useSlider;
