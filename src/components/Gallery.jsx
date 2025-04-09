// src/components/Gallery.jsx
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    {
      src: '/assets/images/gallery/spawn.jpg',
      title: 'Ascraft Spawn',
      description: 'Our magnificent spawn area'
    },
    {
      src: '/assets/images/gallery/build1.jpg',
      title: 'Player Creations',
      description: 'Amazing builds by our community'
    },
    {
      src: '/assets/images/gallery/event1.jpg',
      title: 'Server Events',
      description: 'Fun community events'
    },
    {
      src: '/assets/images/gallery/build2.jpg',
      title: 'Medieval District',
      description: 'Our beautiful medieval builds'
    },
    {
      src: '/assets/images/gallery/pvp.jpg',
      title: 'PvP Arena',
      description: 'Battle it out in our custom arena'
    },
    {
      src: '/assets/images/gallery/survival.jpg',
      title: 'Survival World',
      description: 'Explore our vast survival world'
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-glow">Server Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-glow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.src}
                  alt={image.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          imageTitle={images[photoIndex].title}
          imageCaption={images[photoIndex].description}
        />
      )}
    </section>
  );
};

export default Gallery;