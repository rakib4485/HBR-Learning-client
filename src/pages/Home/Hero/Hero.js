import React, {  useState } from 'react';
import banner1 from '../../../assets/banner/banner-1.jpg'
import banner2 from '../../../assets/banner/banner-2.jpg'
import banner3 from '../../../assets/banner/banner-3.jpg'

import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled, RxPinRight} from 'react-icons/rx'
import { Link } from 'react-router-dom';

const Hero = () => {
    const slides = [
        {
            image: banner1,
            heading: "Convenient easy way of learning new skills!",
            text: "The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail "
        },
        {
            image: banner2,
            heading: "It's time to amplify your online Career",
            text: "The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail "
        },
        {
            image: banner3,
            heading: "Convenient easy way of learning new skills!",
            text: "The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail "
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentSlide === 0;
        const newSlide = isFirstSlide ? slides.length -1 : currentSlide - 1;
        setCurrentSlide(newSlide)
    }

    const nextSlide = () => {
        const isLastSlide = currentSlide === slides.length - 1;
        const newSlide = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    }

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex)
    }

    // setInterval(() => {
    //     setCurrentSlide(currentSlide + 1);
    //     console.log('from out side', currentSlide)
    //     if(currentSlide === slides.length - 1){
    //         console.log(currentSlide)
    //         setCurrentSlide(0)
    //     }
    // }, 5000);


    return (
        <div className='h-[600px] w-full m-auto py-16 relative group'>
            <div
             style={{background:`linear-gradient(rgba(18, 17, 17, 0.5), rgba(25, 23, 23, 0.5)), url(${slides[currentSlide].image})`}}
             className="w-full h-full rounded-md bg-center bg-cover duration-500 text-center items-center text-white">
                <div className="md:w-[70%] mx-auto pt-32 ">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{slides[currentSlide].heading}</h1>
                <p className="md:text-md my-5">{slides[currentSlide].text}</p>
                <div className="flex justify-center">
                <Link className='px-5 py-3 bg-cyan-400 rounded-3xl flex items-center justify-center w-44'>Get Started <RxPinRight className='ml-2 text-2xl'></RxPinRight></Link>
                </div>
                </div>
            </div>

            {/* left arrow */}
            <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl bg-black/20 p-4 rounded-full text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30}></BsChevronCompactLeft>
            </div>
            {/* right arrow */}
            <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl bg-black/20 p-4 rounded-full text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30}></BsChevronCompactRight>
            </div>

            {/* dots */}
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={ () => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                        <RxDotFilled className={`${currentSlide === slideIndex ? "text-white text-3xl" : ""}`}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;