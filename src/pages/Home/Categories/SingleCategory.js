import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({category}) => {

    const {name, image, courses} = category;

    return (
        <div className='py-12 rounded-lg' style={{
            background: `linear-gradient(rgba(18, 17, 17, 0.5), rgba(25, 23, 23, 0.5)), url(${image})`, backgroundSize: "cover"
        }}>
            <div className="text-center text-white">
            <h1 className="text-2xl font-semibold duration-500 hover:text-cyan-400 cursor-pointer"><Link>{name}</Link></h1>
            <p>{courses} courses</p>
            </div>
        </div>
    );
};

export default SingleCategory;