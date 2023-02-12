import React from 'react';
import logo from '../../../assets/logo/HBR-Learning.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                <div className=''>
                    <img src={logo} alt="" className='w-[80%]'/>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, cumque fuga. Minima molestiae </p>
                    <div className="flex justify-around mt-5 text-2xl">
                        <Link className='p-2 bg-slate-600 rounded-full text-white'><FaFacebook></FaFacebook></Link>
                        <Link className='p-2 bg-slate-600 rounded-full text-white'><FaInstagram></FaInstagram></Link>
                        <Link className='p-2 bg-slate-600 rounded-full text-white'><FaTwitter></FaTwitter></Link>
                        <Link className='p-2 bg-slate-600 rounded-full text-white'><FaLinkedin></FaLinkedin></Link>
                    </div>
                </div>
                <div className='md:ml-32'>
                    <h1 className="text-xl font-semibold underline-offset-2">Links</h1>
                    <div className='mt-4'>
                        <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Our Process</Link></li>
                            <li><Link>Courses</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='md:ml-16'>
                    <h1 className="text-xl font-semibold">Community</h1>
                    <div className='mt-4'>
                        <ul>
                            <li><Link>Go Premium</Link></li>
                            <li><Link>Team Plan</Link></li>
                            <li><Link>Refer a Friend</Link></li>
                            <li><Link>Gift Cards</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-semibold">Resources</h1>
                    <div className='mt-4'>
                        <ul>
                            <li><Link>Support</Link></li>
                            <li><Link>Latest Updates</Link></li>
                            <li><Link>Updates Newsletter</Link></li>
                            <li><Link>Course Management</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-slate-600 w-full h-[2px] rounded-sm my-8"></div>
            <p className="text-center">© 2023 HBR Learning.</p>
        </div>
    );
};

export default Footer;