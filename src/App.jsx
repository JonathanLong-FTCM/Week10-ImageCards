import { useState } from "react";
import ImageCard from "./ImageCard";

const images = [ 
  { url: 'https://images.pexels.com/photos/87812/pexels-photo-87812.jpeg',
    title: 'Sunset',
    description: 'Grasses Against the Light of Setting Sun.',
    author: 'Brittany',
    uploadedDatetime: '20/04/2016, 14:36:00'
  },

  { url: 'https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg',
    title: 'Forest',
    description: 'Green Grass on Forest.',
    author: 'Rudolf Jakkel',
    uploadedDatetime: '22/05/2017, 06:07:00' 
  },

  { url: 'https://images.pexels.com/photos/1249586/pexels-photo-1249586.jpeg',
    title: 'Beach',
    description: 'Aerial View Photography of Ocean.',
    author: 'Gui Basto',
    uploadedDatetime: '18/07/2018, 08:16:00' 
  }, 

  { url: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg',
    title: 'Cityscape',
    description: 'Empire State Building, New York.',
    author: 'Lukas Kloeppel',
    uploadedDatetime: '09/07/2017, 16:08:00' 
  }, 

  { url: 'https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg',
    title: 'Desert',
    description: 'Green Bushes on Desert.',
    author: 'Francesco Ungaro',
    uploadedDatetime: '09/04/2018, 13:30:00' 
  }, 

  { url: 'https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg',
    title: 'River',
    description: 'Water Beside Forest during Golden Hour.',
    author: 'Sindre Fs',
    uploadedDatetime: '06/06/2018, 12:23:00' 
  }, 
]

function App() {
  const [globalLike, setGlobalLike] = useState(0);
  const [globalDislike, setGlobalDislike] = useState(0);

  const totalGlobalLike = () => {
    setGlobalLike((prev) => prev + 1);
  };

  const totalGlobalDislike = () => {
    setGlobalDislike((prev) => prev + 1);
  };

  return (
    <div style={{backgroundColor: '#f9f9f9'}}>
      <h1 className='header'style={{
          textAlign: 'center', 
          fontFamily: 'sans-serif', 
          marginTop: '30px',
          color: '#273347',
          }}>Image Gallery</h1>
      <div style={{
           textAlign: 'center', 
           margin: '20px', 
           fontFamily: 'sans-serif',
           fontSize: '18px'
           }}>&#x1F44D; Total Likes: {globalLike}</div>
      <div style={{
           textAlign: 'center', 
           margin: '20px', 
           fontFamily: 'sans-serif',
           fontSize: '18px'
           }}>&#x1F44E; Total Dislikes: {globalDislike}</div>
      <div style={{
           display: 'grid',
           gridTemplateColumns: 'repeat(3, 400px)',     
           justifyContent: 'center',
           gap: '40px', 
      }}>
        {images.map((image, index) => (
          <ImageCard
            key={index}
            url={image.url}
            title={image.title}
            description={image.description}
            author={image.author}
            uploadedDatetime={image.uploadedDatetime}
            onGlobalLike={totalGlobalLike}
            onGlobalDislike={totalGlobalDislike}
          />
        ))}
      </div>
    </div>
  );
}

export default App
