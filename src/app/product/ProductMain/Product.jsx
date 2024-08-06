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
            Name: "Flyers",
            Main: "/Products/Flyers/flyers 1.jpg",
            Image_url: [
                "/Products/Flyers/flyers 1.jpg",
                "/Products/Flyers/flyers 2.jpg",
                "/Products/Flyers/flyers 3.jpg",
                "/Products/Flyers/flyers 4.jpg",
            ]
        },
        {
            Name: "Event Ticket",
            Main: "/Products/Eventticket/eventticket 3.jpg",
            Image_url: [
                "/Products/Eventticket/eventticket 1.jpg",
                "/Products/Eventticket/eventticket 2.jpg",
                "/Products/Eventticket/eventticket 3.jpg",
                "/Products/Eventticket/eventticket 4.jpg",
            ]
        },
        {
            Name: "Envelop",
            Main: "/Products/Envelop/Envelope 2.jpg",
            Image_url: [
                "/Products/Envelop/Envelope 1.jpg",
                "/Products/Envelop/Envelope 2.jpg",
                "/Products/Envelop/Envelope 3.jpg",
                "/Products/Envelop/Envelope 4.jpg",
            ]
        },
        {
            Name: "Certificate",
            Main: "/Products/certificate/cer1.jpg",
            Image_url: [
                "/Products/certificate/cer1.jpg",
                "/Products/certificate/cer2.jpg",
                "/Products/certificate/cer3.jpg",
                "/Products/certificate/cer4.jpg",
            ]
        },
        {
            Name: "ID Cards",
            Main: "/Products/Idcard/IDCARD 1.jpg",
            Image_url: [
                "/Products/Idcard/IDCARD 1.jpg",
                "/Products/Idcard/IDCARD 2.jpg",
                "/Products/Idcard/IDCARD 3.jpg",
                "/Products/Idcard/IDCARD 4.jpg",
            ]
        },
        {
            Name: "Visiting Cards",
            Main: "/Products/Visitingcard/visitingcard 1.jpg",
            Image_url: [
                "/Products/Visitingcard/visitingcard 1.jpg",
                "/Products/Visitingcard/visitingcard 2.jpg",
                "/Products/Visitingcard/visitingcard 3.jpg",
                "/Products/Visitingcard/visitingcard 4.jpg",
            ]
        },
        {
            Name: "Stickers",
            Main: "/Products/Sticker/sticker 1.jpg",
            Image_url: [
                "/Products/Sticker/sticker 1.jpg",
                "/Products/Sticker/sticker 2.jpg",
                "/Products/Sticker/sticker 4.jpg",
                "/Products/Sticker/sticker 5.jpg",
            ]
        },
        {
            Name: "Invitaion",
            Main: "/Products/Invitation/invitation 1.jpg",
            Image_url: [
                "/Products/Invitation/invitation 1.jpg",
                "/Products/Invitation/invitation 2.jpg",
                "/Products/Invitation/invitation 3.jpg",
                "/Products/Invitation/invitation 4.jpg",
            ]
        },
        {
            Name: "Plan's",
            Main: "/Products/Plan/plan.jpg",
            Image_url: [
                "/Products/Plan/plan.jpg",
                "/Products/Plan/plan2.jpg",
                "/Products/Plan/plan3.jpg",
                "/Products/Plan/plan4.jpg",
            ]
        },
        {
            Name: "Photos Frames",
            Main: "/Products/Photo/photo.jpg",
            Image_url: [
                "/Products/Photo/photo.jpg",
                "/Products/Photo/photo2.jpg",
                "/Products/Photo/photo3.jpg",
                "/Products/Photo/photo4.jpg",
            ]
        },
        {
            Name: "Menu Card's",
            Main: "/Products/Menucard/menucard 1.jpg",
            Image_url: [
                "/Products/Menucard/menucard 1.jpg",
                "/Products/Menucard/menucard 2.jpg",
                "/Products/Menucard/menucard 3.jpg",
                "/Products/Menucard/menucard 4.jpg",
            ]
        },
        {
            Name: "Booklet",
            Main: "/Products/Booklet/booklet 2.jpg",
            Image_url: [
                "/Products/Booklet/booklet 1.jpg",
                "/Products/Booklet/booklet 2.jpg",
                "/Products/Booklet/booklet 3.jpg",
                "/Products/Booklet/booklet 4.jpg",
            ]
        },
        {
            Name: "Spiral",
            Main: "/Products/Spiral/spiral2.jpg",
            Image_url: [
                "/Products/Spiral/spiral.jpg",
                "/Products/Spiral/spiral2.jpg",
                "/Products/Spiral/spiral3.jpg",
                "/Products/Spiral/spiral4.jpg",
            ]
        },
        {
            Name: "Wiro Binding",
            Main: "/Products/Wiro/wiro4.jpg",
            Image_url: [
                "/Products/Wiro/wiro.jpg",
                "/Products/Wiro/wiro2.jpg",
                "/Products/Wiro/wiro3.jpg",
                "/Products/Wiro/wiro4.jpg",
            ]
        },
        {
            Name: "Lanyard",
            Main: "/Products/Lanyard/lanyard 1.jpg",
            Image_url: [
                "/Products/Lanyard/lanyard 1.jpg",
                "/Products/Lanyard/lanyard 2.jpg",
                "/Products/Lanyard/lanyard 3.jpg",
                "/Products/Lanyard/lanyard 4.jpg",
            ]
        },
        {
            Name: "Catlog",
            Main: "/Products/Catlog/Catlog 3.jpg",
            Image_url: [
                "/Products/Catlog/Catlog 1.jpg",
                "/Products/Catlog/Catlog 2.jpg",
                "/Products/Catlog/Catlog 3.jpg",
                "/Products/Catlog/Catlog 4.jpg",
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
                <h1 className="text-5xl font-bold text-center py-5">Product</h1>
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








