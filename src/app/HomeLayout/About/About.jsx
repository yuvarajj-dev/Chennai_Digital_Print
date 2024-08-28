"use client";
import Image from 'next/image';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import "./About.css";

// https://live.templately.com/printify-home/
gsap.registerPlugin(ScrollTrigger);
const About = () => {

    useGSAP(() => {
        if (window.innerWidth >= 1024) {
            let ctx = gsap.context(() => {
                // Create a timeline
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#Choose',
                        start: 'top top',
                        end: '+=400%',
                        scrub: true,
                        pin: true,
                    }
                });

                tl.fromTo(
                    "#card1",
                    { opacity: 1, y: "0rem" },  
                    { opacity: 0, y: "-5rem", duration: 1, ease: "power3.out" }  
                )
                    .fromTo(
                        "#card2",
                        { opacity: 1, y: "0rem" }, 
                        { opacity: 0, y: "-5rem", duration: 1, ease: "power3.out" }  
                    )
                    .fromTo(
                        "#card3",
                        { opacity: 1, y: "0rem" },  
                        { opacity: 0, y: "-5rem", duration: 1, ease: "power3.out" }  
                    )
                    .fromTo(
                        "#card4",
                        { opacity: 1, y: "0rem" }, 
                        { opacity: 0, y: "-5rem", duration: 1, ease: "power3.out" }  
                    );
 
            });

            return () => {
                ctx.revert();
            };
        }
    }, []);

    return (
        <>
            <div id='Choose' className='relative lg:h-[100vh] lg:bg-transparent bg-[#03AED2] overflow-hidden py-10 block '>
                <div className='h-full  hidden lg:block  w-full absolute top-0 left-0 -z-10 brightness-50 '>
                    <Image src={"/About/print_mech.jpg"} height={2000} width={2000} className='w-full h-screen object-cover rounded-sm  ' />
                </div>
                <div className='text-white'>
                    <div className='lg:text-[55px]  text-[25px]  p-5 uppercase text-center font-abold  '>
                        <h2>Why Choose Us</h2>
                    </div>
                    <div id='cards' className='w-full md:grid lg:grid-cols-2 grid-cols-1  pt-10 px-2 '>

                        <div id='card1' className='Card md:w-[500px] md:flex justify-center items-center md:h-[200px] md:p-10 p-3 rounded-xl shadow-md mx-auto my-5 gap-5'>
                            <div className='icon md:w-[40%] w-full flex justify-center items-center mx-auto py-2'>
                                <Image src={"https://img.icons8.com/fluency/48/group.png"} alt='icon' height={400} width={400} className='w-20' />
                            </div>
                            <div className='text text-center md:text-start'>
                                <h2 className='md:text-2xl text-xl md:py-5 py-2'>Wide Range Of Services</h2>
                                <p>We deliver a variety of printing services for you to choose what you need the most.</p>
                            </div>
                        </div>

                        <div id='card2' className='Card md:w-[500px] md:flex justify-center items-center md:h-[200px] md:p-10 p-3 rounded-xl shadow-md mx-auto my-5 gap-5'>
                            <div className='icon  md:w-[40%] w-full flex justify-center items-center mx-auto py-2'>
                                <Image src={"https://img.icons8.com/plasticine/100/rocket.png"} alt='icon' height={400} width={400} className='w-20' />
                            </div>
                            <div className='text text-center md:text-start'>
                                <h2 className='md:text-2xl text-xl md:py-5 py-2'>Speed</h2>
                                <p>Our team works fast to bring you the best posters, brochures, and other products.</p>
                            </div>
                        </div>

                        <div id='card3' className='Card md:w-[500px] md:flex justify-center items-center md:h-[200px] md:p-10 p-3 rounded-xl shadow-md mx-auto my-5 gap-5'>
                            <div className='icon  md:w-[40%] w-full flex justify-center items-center mx-auto py-2'>
                                <Image src={"https://img.icons8.com/dusk/64/low-price.png"} alt='icon' height={400} width={400} className='w-20' />
                            </div>
                            <div className='text text-center md:text-start'>
                                <h2 className='md:text-2xl text-xl md:py-5 py-2'>Low Prices</h2>
                                <p>Our affordable pricing policy allows you to save a lot on our premium printing services.</p>
                            </div>
                        </div>

                        <div id='card4' className='Card md:w-[500px] md:flex justify-center items-center md:h-[200px] md:p-10 p-3 rounded-xl shadow-md mx-auto my-5 gap-5'>
                            <div className='icon  md:w-[40%] w-full flex justify-center items-center mx-auto py-2'>
                                <Image src={"https://img.icons8.com/color/48/guarantee.png"} alt='icon' height={400} width={400} className='w-20' />
                            </div>
                            <div className='text text-center md:text-start'>
                                <h2 className='md:text-2xl text-xl md:py-5 py-2'>High Quality</h2>
                                <p>We provide high-quality printing solutions, products, and services to all our clients.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default About;
