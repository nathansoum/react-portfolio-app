import React from "react";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Nathan, a passionate developer!</p>
            </div>
            <div>
              <p>I am a graduate of the UPENN LPS Coding Bootcamp where I solidified my passion for coding!
                 I'm looking for an opportunity to contribute towards the development of high-quality products and applications.
                 Feel free to look around and hope you enjoy my portfolio.
                </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
