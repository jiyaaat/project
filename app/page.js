// pages/index.js
"use client";
import dynamic from 'next/dynamic';

const DynamicCarousel = dynamic(() => import('../components/Carousel'), { ssr: false });

const images = [
  'https://images.pexels.com/photos/1774303/pexels-photo-1774303.jpeg?cs=srgb&dl=pexels-lady-escabia-1774303.jpg&fm=jpg',
  'https://images.unsplash.com/photo-1605457867610-e990b192418e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D',
  'https://www.aldeyra.com/wp-content/uploads/2019/08/science-version1-blank-1500x600.jpg',
];

const Home = () => {
  return (
    <div className="container mx-auto mt-10">
      
      <DynamicCarousel images={images} />
    </div>
  );
};

export default Home;
