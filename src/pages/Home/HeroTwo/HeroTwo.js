import React from 'react';
import heroTwoImg from '../../../assets/heroTwo.png'

const HeroTwo = () => {
    return (
        <div className='my-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
            <div className='font-serif lg:ml-8'>
                    <h1 className='text-5xl font-bold'>Build personalized student experience</h1>
                    <p className='text-justify my-3'>Meet the needs of the modern student and drive outcomes with a student engagement platform that creates personal, mobile experiences that resonate throughout the students academic journey.</p>
                    <button className='bg-gradient-to-l from-cyan-500 to-green-600 p-3 rounded-md text-white'>Learn More</button>
                </div>
                <div>
                    <img src={heroTwoImg} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default HeroTwo;