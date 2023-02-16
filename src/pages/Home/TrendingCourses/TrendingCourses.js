import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleTrendingcourse from './SingleTrendingcourse';

const TrendingCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('trendingcourse.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-3xl mb-5 text-center mt-20 font-bold font-serif">
                    TOP COURSES IN{" "}
                    <span className="ont-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        PROGRAMING
                    </span>
                </h1>
            </div>
            <div className='grid gap-3 grid-cols-1 lg:grid-cols-3 rounded-md'>
                {
                    courses.map(course => <SingleTrendingcourse
                        key={course._id}
                        course={course}
                    ></SingleTrendingcourse>)
                }
            </div>

        </div>
    );
};

export default TrendingCourses;
