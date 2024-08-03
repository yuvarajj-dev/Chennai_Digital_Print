"use client"
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Product = () => {
    const [selectedImages, setSelectedImages] = useState(null);

    const Product_data = [
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
        {
            Name: "Bill Books",
            Main: "/Products/Bill/bill3.jpg",
            Image_url: [
                "/Products/Bill/bill1.jpg",
                "/Products/Bill/bill2.jpg",
                "/Products/Bill/bill3.jpg",
                "/Products/Bill/bill4.jpg",
            ]
        },
        {
            Name: "Broucher's",
            Main: "/Products/Broucher/Broucher 1.jpg",
            Image_url: [
                "/Products/Broucher/Broucher 1.jpg",
                "/Products/Broucher/Broucher 2.jpg",
                "/Products/Broucher/Broucher 3.jpg",
                "/Products/Broucher/Broucher 4.jpg",
            ]
        },
         
    ];

    const openGallery = (images) => {
        setSelectedImages(images.map(url => ({
            original: url,
            thumbnail: url,
        })));
    };

    return (
        <div className="bg-gray-100">
            <div>
                <h1 className="text-2xl font-bold text-center py-5">Product</h1>
            </div>
            <div className="w-full min-h-screen flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4  ">
                    {Product_data.map((item, index) => (
                        <div key={index} className="relative group ">
                            <img src={item.Main} alt={item.Name} className="w-full h-full object-cover rounded-lg  " />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 rounded-lg transition-opacity">
                                <div className="flex justify-between">
                                    <p className="text-white font-bold">{item.Name}</p>
                                </div>
                                <div className="flex justify-center items-center w-full">
                                    <button
                                        className="px-4 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700"
                                        onClick={() => openGallery(item.Image_url)}
                                    >
                                        See More...
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedImages && (
                <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-md flex justify-center items-center z-50">
                    <div className="relative      p-4 rounded-lg  max-w-screen-lg w-full">
                        <button
                            className="absolute top-20  right-0 text-white z-50 bg-red-600 rounded-full px-4 py-2"
                            onClick={() => setSelectedImages(null)}
                        >
                            Close
                        </button>
                        <ImageGallery items={selectedImages} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Product;



// "use client"
// import React, { useState } from 'react';
// import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css';

// const Product = () => {
//     const [selectedImages, setSelectedImages] = useState(null);

//     const Product_data = [
//         {
//             Name: "Bill Books",
//             Main: "/Products/Bill/bill3.jpg",
//             Image_url: [
//                 "/Products/Bill/bill1.jpg",
//                 "/Products/Bill/billi2.jpg",
//                 "/Products/Bill/bill3.jpg",
//                 "/Products/Bill/bill4.jpg",
//             ]
//         },
//         // Add more objects as needed
//     ];

//     const openGallery = (images) => {
//         setSelectedImages(images.map(url => ({
//             original: url,
//             thumbnail: url,
//         })));
//     };

//     return (
//         <div className="bg-gray-100">
//             <div>
//                 <h1 className="text-2xl font-bold text-center py-5">Product</h1>
//             </div>
//             <div className="w-full min-h-screen flex justify-center items-center">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
//                     {Product_data.map((item, index) => (
//                         <div key={index} className="relative group">
//                             <img src={item.Main} alt={item.Name} className="w-full h-full object-cover rounded-lg border border-black" />
//                             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 rounded-lg transition-opacity">
//                                 <div className="flex justify-between">
//                                     <p className="text-white font-bold">{item.Name}</p>
//                                 </div>
//                                 <div className="flex justify-center items-center w-full">
//                                     <button
//                                         className="px-4 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700"
//                                         onClick={() => openGallery(item.Image_url)}
//                                     >
//                                         See More...
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             {selectedImages && (
//                 <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//                     <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-screen-lg w-full">
//                         <button
//                             className="absolute top-2 right-2 text-white bg-red-600 rounded-full px-4 py-2"
//                             onClick={() => setSelectedImages(null)}
//                         >
//                             Close
//                         </button>
//                         <ImageGallery items={selectedImages} />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Product;








