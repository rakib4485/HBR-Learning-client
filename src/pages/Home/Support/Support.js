import React from 'react';
import { HiChatAlt2, HiServer, HiOutlineBookOpen, HiOutlinePresentationChartBar } from "react-icons/hi";
import './Support.css';

const Support = () => {
    return (
        <div className='my-20 card-text'>
            <div className='grid gap-3 grid-cols-1 lg:grid-cols-4'>
                <div className='bg-gradient-to-tl from-slate-400 to-violet-400 p-5 rounded-sm'>
                    <HiChatAlt2 className='bg-orange-400 text-5xl rounded-full p-3 text-white'></HiChatAlt2>
                    <h1 className='text-2xl font-semibold mt-4'>Communicate with students, their way</h1>
                </div>
                <div className='text-5xl p-5 bg-gradient-to-br from-indigo-400 to-slate-400 rounded-sm'>
                    <HiServer className='bg-cyan-600 rounded-full p-3 text-white'></HiServer>
                    <h1 className='text-2xl font-semibold mt-4'>Track student involvement</h1>
                </div>
                <div className='text-5xl p-5 bg-gradient-to-b from-violet-400 to-red-300 rounded-sm'>
                    <HiOutlineBookOpen className='bg-green-700 rounded-full p-3 text-white'></HiOutlineBookOpen>
                    <h1 className="text-2xl font-semibold mt-4">Drive student outcomes with AI</h1>
                </div>
                <div className='text-5xl p-5 bg-gradient-to-bl from-amber-200 to-red-300 rounded-sm'>
                    <HiOutlinePresentationChartBar className='bg-emerald-400 rounded-full p-3 text-white'></HiOutlinePresentationChartBar>
                    <h1 className='text-2xl font-semibold mt-4'>24/7 Support system</h1>
                </div>
            </div>
        </div>
    );
};

export default Support;