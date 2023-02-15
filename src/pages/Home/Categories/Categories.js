import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, []);
    return (
        <div className='mt-20'>
            <h1 className='uppercase text-center text-2xl text-cyan-600 font-serif'>top categories</h1>
            <h1 className="text-5xl text-center font-bold font-serif">Explore by category</h1>
            <p className="text-center text-lg md:w-3/4 lg:w-1/2 mx-auto my-4">The ultimate planning solution for busy women who want to reach their personal goals</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                    categories.map( category => <SingleCategory
                        key={category._id}
                        category={category}
                    ></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default Categories;