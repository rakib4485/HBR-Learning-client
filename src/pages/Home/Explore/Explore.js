import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiDocumentSearch, HiSearchCircle } from 'react-icons/hi';
const Explore = () => {
    return (
        <div>
            <div className='my-5 card-text '>
                <div className='grid gap-3 grid-cols-1 lg:grid-cols-3  '>
                    <div className='bg-gradient-to-tl from-slate-400 to-violet-400 p-5 rounded-xl cursor-pointer inline-flex items-center '>
                        <HiSearchCircle className='bg-orange-400 text-5xl rounded-full p-3 text-white ml-10'></HiSearchCircle>
                        <h1 className='text-2xl font-semibold ml-4 '>Explore</h1>
                    </div>
                    <div className='text-5xl p-5 bg-gradient-to-bl from-violet-400 to-red-300 rounded-xl cursor-pointer inline-flex items-center'>
                        <BsFillPlayFill className='bg-cyan-600 rounded-full p-3 text-white ml-10'></BsFillPlayFill>
                        <h1 className='text-2xl font-semibold ml-4'>Enroll</h1>
                    </div>
                    <div className='text-5xl p-5 bg-gradient-to-b from-amber-200 to-red-300  rounded-xl cursor-pointer inline-flex items-center '>
                        <HiDocumentSearch className='bg-green-700 rounded-full p-3 text-white ml-10'></HiDocumentSearch>
                        <h1 className="text-2xl font-semibold ml-4">Learn</h1>
                    </div>

                </div>
            </div>
            {/* <form className="max-w-sm px-4 ">
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className=" w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
                </div>
            </form> */}
        </div>
    );
};

export default Explore;