import Image from 'next/image';
import React from 'react';

const Choose = () => {
    return (
        <>
            <div id="About" className='Choose py-5 block'>
                <div className='flex justify-center items-center w-full'>
                    <div className='flex justify-center items-center'>
                        <h2 className='lg:text-[55px]  text-[25px]  font-extrabold'>ABOUT</h2>
                        <Image src={"/digital-print/butterfly.png"} alt='butter' width={500} height={500} className='lg:w-16 lg:h-16 w-12 h-12' />
                        <h2 className='lg:text-[55px] text-[25px]  font-extrabold'>US</h2>
                    </div>
                </div>
                <div className='md:px-14 md:py-10 px-3 py-5'>
                    <div>
                        <div className='md:py-10 py-5 border-[2px] border-x-0'>
                            <h2 className='md:text-[30px] text-[20px] font-bold italic btn-shine'>WHO WE ARE</h2>
                            <p className=' md:text-lg text-justify md:w-1/2 md:py-0 py-2'>
                                At Chennai Digital Prints, we&apos;re experts in providing exceptional printing solutions designed just for you. If it&apos;s business cards,
                                captivating posters, or customized banners you&apos;re after, we&apos;ve got everything you need. Our focus is on using the latest technology to guarantee
                                sharp, top-quality prints every single time. From start to finish, we&apos;re dedicated to going above and beyond to make your vision a reality.
                            </p>
                        </div>
                        <div className='w-full'>
                            <Image src={"/digital-print/digital_printing.jpg"} alt='digitalcircle' width={1500} height={1500} className='w-full rounded-xl' />
                        </div>
                    </div>
                    <div className='flex w-full justify-end items-center md:px-14 md:py-10  py-5 border-[2px] border-x-0'>
                        <div className='md:w-1/2 w-full'>
                            <h2 className='md:text-[30px] text-[20px] font-bold italic btn-shine'>WHAT WE DO</h2>
                            <p className='md:text-lg text-justify md:py-0 py-2'>
                                At Chennai Digital Prints, we&apos;re not just a printing company; we&apos;re your reliable partner in turning your ideas into reality. Since 2006, we&apos;ve been
                                committed to offering outstanding printing services that go above and beyond. We prioritize quality, affordability, and making sure you&apos;re satisfied.
                            </p>
                        </div>
                    </div>
                    <div className='md:px-14 md:py-10 py-5 border-[2px] border-x-0 border-t-0'>
                        <h2 className='md:text-[30px] text-[20px] font-bold italic btn-shine1'>Customer Satisfaction Guaranteed</h2>
                        <p className='md:text-lg text-justify md:w-1/2 w-full'>
                            At Chennai Digital Prints, your satisfaction is our top priority. We&apos;re here to assist you with any questions or concerns you may have.
                            We aim to make every interaction easy and enjoyable. Experience the best in printing with Chennai Digital Prints.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Choose;




// import Image from 'next/image'
// import React from 'react'

// const Choose = () => {
//     return (
//         <>
//             <div className='  Choose py-10 block'>
//                 <div className='flex justify-center items-center w-full'>
//                     <div className='flex justify-center items-center'>
//                         <h2 className='text-[55px] font-extrabold'>ABOUT</h2>
//                         <Image src={"/digital-print/butterfly.png"} alt='butter' width={500} height={500} className='w-16 h-16 ' />
//                         <h2 className='text-[55px] font-extrabold'>US</h2>
//                     </div>

//                 </div>
//                 <div className='px-14 py-10'>
//                     <div >
//                         <div className='py-10  border-[2px] border-x-0'>
//                             <h2 className='text-[30px] font-bold italic btn-shine'>WHO WE ARE</h2>
//                             <p className='text-lg text-justify w-1/2' >At Chennai Digital Prints, we're experts in providing exceptional printing solutions designed just for you. If it's business cards,
//                                 captivating posters, or customized banners you're after, we've got everything you need. Our focus is on using the latest technology to guarantee
//                                 sharp, top-quality prints every single time. From start to finish, we're dedicated to going above and beyond to make your vision a reality.</p>
//                         </div>
//                         <div className='w-full'>
//                             <Image src={"/digital-print/digital_printing.jpg"} alt='digitalcircle' width={1500} height={1500} className='w-full rounded-xl' />
//                         </div>
//                     </div>
//                     <div className='flex w-full justify-end items-center py-10 border-[2px] border-x-0 '>
//                         <div className='w-1/2'>
//                             <h2 className='text-[30px] font-bold italic btn-shine'>WHAT WE DO</h2>
//                             <p className='text-lg text-justify '>At Chennai Digital Prints, we're not just a printing company; we're your reliable partner in turning your ideas into reality. Since 2006, we've been
//                                 committed to offering outstanding printing services that go above and beyond. We prioritize quality, affordability, and making sure you're satisfied.</p>
//                         </div>
//                     </div>
//                     <div className='py-10 border-[2px] border-x-0 border-t-0'>
//                         <h2 className='text-[30px] font-bold italic btn-shine1'>Customer Satisfaction Guaranteed</h2>
//                         <p className='text-lg text-justify w-1/2 '>At Chennai Digital Prints, your satisfaction is our top priority. We're here to assist you with any questions or concerns you may have.
//                             We aim to make every interaction easy and enjoyable. Experience the best in printing with Chennai Digital Prints.</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Choose;