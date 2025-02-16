import React from 'react';

const Banner = ({ image, page, description }) => {
  return (
    <div 
      className="relative flex w-full h-64 md:h-80 lg:h-[400px] bg-cover bg-center items-center justify-center text-center px-5"
      style={{ backgroundImage: `url(${image})` }}
    >   
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
          {page}
        </h1>
        <h2 className="text-lg md:text-xl font-semibold py-5 text-slate-100 drop-shadow-md">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default Banner;