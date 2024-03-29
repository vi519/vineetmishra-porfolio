import React, { useState } from 'react';
import Stats from '../assets/medium.webp';
import Image from 'next/image';

function BlogCard(props) {
  const [isHovered, setIsHovered] = useState(false);
 
  

  const styles = {
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  return (
    <div className="flex justify-center" >
      <div
        className="max-w-xl w-full mx-4 p-6 bg-white rounded-lg shadow-xl border-4 border-white-500"
        style={{styles,...(props.isDarkMode ? props.customStyle :null)}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-w-16 aspect-h-9 mb-6">
          <Image
            className="object-cover object-center rounded-lg"
            src={Stats}
            alt="Blog Stats"
          />
        </div>
        <p className="text-black-100 text-lg mb-4">
          Discover a world of web and mobile development in my blogs, enriched with fascinating code snippets. Join my 800+ followers and explore 100k+ views!
        </p>
        <a href="https://vineetmishrahbk.medium.com/">
          <button
            type="button"
            className="inline-block px-6 py-3 bg-purple-800 text-white font-semibold text-sm uppercase rounded-full shadow-md hover:bg-purple-900 focus:ring-2 focus:ring-purple-300 active:bg-purple-700 transition duration-150 ease-in-out"
          >
            Start Exploring →
          </button>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
