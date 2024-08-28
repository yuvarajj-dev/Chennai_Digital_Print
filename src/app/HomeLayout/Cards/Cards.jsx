import Link from 'next/link'
import React from 'react'

const Cards = () => {
    return (
        <>
            <div className="Cards pt-5 pb-10">
                <div>
                    <h1 className="lg:text-[55px]  text-[25px] font-bold text-center md:pb-10 ">Products</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3  ">
                     
                    <div className="relative group ">
                        <Link href="/product" >
                            <img src={'/Products/Photo/photo4.jpg'} alt={"Welcome"} className="w-full h-full object-cover rounded-lg  " />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 rounded-lg transition-opacity shadow-sm">
                                <div className="flex justify-between">
                                    <p className="text-white font-bold">Photo Printing & Frames</p>
                                </div>
                                <div className="flex justify-center items-center w-full">
                                    <button
                                        className="px-4 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700"

                                    >
                                        See More...
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="relative group ">
                        <Link href="/product" >
                            <img src={'/Products/Invitation/invitation 1.jpg'} alt={"Welcome"} className="w-full h-full object-cover rounded-lg  " />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 rounded-lg transition-opacity">
                                <div className="flex justify-between">
                                    <p className="text-white font-bold">Invitations</p>
                                </div>
                                <div className="flex justify-center items-center w-full">
                                    <button
                                        className="px-4 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700"

                                    >
                                        See More...
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="relative group ">
                        <Link href="/product" >
                            <img src={'/Products/Visitingcard/visitingcard 2.jpg'} alt={"Welcome"} className="w-full h-full object-cover rounded-lg  " />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 rounded-lg transition-opacity shadow-sm">
                                <div className="flex justify-between">
                                    <p className="text-white font-bold">Visting Cards</p>
                                </div>
                                <div className="flex justify-center items-center w-full">
                                    <button
                                        className="px-4 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700"

                                    >
                                        See More...
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="relative group ">
                        <Link href="/product" >
                            <img src={'/Products/Broucher/Broucher 3.jpg'} alt={"Welcome"} className="w-full h-full object-cover rounded-lg  " />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 rounded-lg transition-opacity shadow-sm">
                                <div className="flex justify-between">
                                    <p className="text-white font-bold">Brouchers</p>
                                </div>
                                <div className="flex justify-center items-center w-full">
                                    <button
                                        className="px-4 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700"

                                    >
                                        See More...
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards