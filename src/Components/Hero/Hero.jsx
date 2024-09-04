import React from 'react';
import img from './img/bg.png'

const Hero = () => {
  return (
<main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">

<div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                
                <h1 class="text-6xl sm:text-8xl font-semibold flex flex-col leading-none dark:text-white text-gray-800">
                    This is my Portfolio
                </h1>
                <p class="text-md sm:text-base text-gray-700 dark:text-white">
                Welcome to my portfolio! I’m Gabriel Malanday, a passionate full-stack developer with a flair for creating dynamic, user-centric web applications. 
                </p>
                <div class="flex mt-8">
                    <a href="#contact" class="uppercase py-2 px-4 rounded-lg bg-indigo-500 border-2 border-transparent text-white text-md mr-4 hover:bg-indigo-600">
                        Hire Me
                    </a>    
                    <a href="#about" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-indigo-500 text-indigo-500 dark:text-white hover:bg-indigo-500 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <div class="relative w-full h-full flex items-center justify-center">

    <div class="absolute inset-0 bg-indigo-500 rounded-full mix-blend-multiply filter blur-lg "></div>
  

    <img src={img} class="relative rounded-full object-cover z-10"/>
</div>
</div>
        </div>
    </div>
</main>
  );
}

export default Hero;