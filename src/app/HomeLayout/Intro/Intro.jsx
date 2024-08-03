import Navbar from '@/app/Navbar/Navbar';
import React from 'react';

const Intro = () => {
    return (
        <div className='relative'>
            <div className='absolute w-full top-10 z-50 px-4 md:px-0'><Navbar /></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50 w-full px-4 md:px-0'>
                <h1 className='md:text-5xl text-xl text-white uppercase font-extrabold'>Chennai Digital Prints</h1>
                <p className='md:text-xl text-orange-50 py-4 uppercase font-extrabold'>DIGITAL PRESS - A UNIT OF CHENNAI XEROX</p>
                <div className=" flex justify-center items-center gap-4">
                    <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-yellow-500 text-yellow-500 hover:border-yellow-400 focus:outline-none focus:border-yellow-400 focus:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none">
                        See More...
                    </button>
                    <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-yellow-500 text-yellow-500 hover:border-yellow-400 focus:outline-none focus:border-yellow-400 focus:text-yellow-400 disabled:opacity-50 disabled:pointer-events-none">
                        Call Us
                    </button>
                </div>
            </div>



            <div className=''>
                <video className='h-screen w-full object-cover brightness-50 ' autoPlay muted loop>
                    <source src="/introvideo/introvideo.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default Intro;

