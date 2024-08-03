import React from 'react'

const Cards = () => {
    return (
        <>
            <div className="Cards py-5">
                <div>
                    <h1 className="text-2xl font-bold text-center pb-10">Products</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4  ">
                    <div   className="relative group ">
                        <img src={'/Products/Broucher/Broucher 2.jpg'} alt={"Welcome"} className="w-full h-full object-cover rounded-lg  " />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 rounded-lg transition-opacity">
                            <div className="flex justify-between">
                                <p className="text-white font-bold">Cards</p>
                            </div>
                            <div className="flex justify-center items-center w-full">
                                <button
                                    className="px-4 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700"
                                    
                                >
                                    See More...
                                </button>
                            </div>
                        </div>
                    </div>
                    <div   className="relative group ">
                        <img src={'/Products/Broucher/Broucher 2.jpg'} alt={"Welcome"} className="w-full h-full object-cover rounded-lg  " />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 rounded-lg transition-opacity">
                            <div className="flex justify-between">
                                <p className="text-white font-bold">Cards</p>
                            </div>
                            <div className="flex justify-center items-center w-full">
                                <button
                                    className="px-4 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700"
                                    
                                >
                                    See More...
                                </button>
                            </div>
                        </div>
                    </div>
                    <div   className="relative group ">
                        <img src={'/Products/Broucher/Broucher 2.jpg'} alt={"Welcome"} className="w-full h-full object-cover rounded-lg  " />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 rounded-lg transition-opacity">
                            <div className="flex justify-between">
                                <p className="text-white font-bold">Cards</p>
                            </div>
                            <div className="flex justify-center items-center w-full">
                                <button
                                    className="px-4 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700"
                                    
                                >
                                    See More...
                                </button>
                            </div>
                        </div>
                    </div>
                    <div   className="relative group ">
                        <img src={'/Products/Broucher/Broucher 2.jpg'} alt={"Welcome"} className="w-full h-full object-cover rounded-lg  " />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 rounded-lg transition-opacity">
                            <div className="flex justify-between">
                                <p className="text-white font-bold">Cards</p>
                            </div>
                            <div className="flex justify-center items-center w-full">
                                <button
                                    className="px-4 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700"
                                    
                                >
                                    See More...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards