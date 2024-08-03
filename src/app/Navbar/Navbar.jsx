"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className='bg-[#FFF]  md:py-2 py-1 max-w-[1000px] w-full mx-auto rounded-3xl z-50'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap items-center justify-between w-full'>
                    <div className='z-40'>
                        <Link href={"#Home"}>
                            <div className='flex'>
                                <Image
                                    priority
                                    src={"/Logo/logo.png"}
                                    alt='Logo'
                                    width={60}
                                    height={60}
                                    className='w-[50px] h-[50px] relative left-5'
                                />
                                <Image
                                    priority
                                    src={"/Logo/logo-bottom.png"}
                                    alt='Logo'
                                    width={100}
                                    height={70}
                                    className='md:w-[100%] w-28 text-left'
                                />
                            </div>
                        </Link>
                    </div>
                    <div className='hidden md:flex justify-evenly items-center  z-40  '>
                        <Link className='pl-9 text-[17px] text-[#000] hover:text-[#000000b8] font-[500] uppercase' href={"#Home"}>Home</Link>
                        <Link className='pl-9 text-[17px] text-[#000] hover:text-[#000000b8] font-[500] uppercase' href={"#About"}>About</Link>
                        <Link className='pl-9 text-[17px] text-[#000] hover:text-[#000000b8] font-[500] uppercase' href={"/product"}>Products</Link>
                        <Link className='pl-9 text-[17px] text-[#000] hover:text-[#000000b8] font-[500] uppercase' href={"#Contact"}>Contact</Link> 
                    </div>

                    <div className='md:hidden pr-6 z-40'>
                        <button onClick={() => { setOpen(!open) }}>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 18L20 18" stroke="#000" stroke-width="2" stroke-linecap="round"></path><path d="M4 12L20 12" stroke="#000" stroke-width="2" stroke-linecap="round"></path><path d="M4 6L20 6" stroke="#000" stroke-width="2" stroke-linecap="round"></path></svg>
                        </button>


                    </div>
                    <div className={`  ${open ? 'max-h-20' : 'max-h-0 transition-all delay-100 overflow-hidden'}`} >

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
