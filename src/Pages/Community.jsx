import Marquee from "react-fast-marquee";
import React from 'react';
import { RiUserCommunityLine } from "react-icons/ri";
import { TbMarquee } from 'react-icons/tb';
import img1 from '../../public/image-1.jpg'
import img2 from '../../public/image-2.jpg'
import img3 from '../../public/image-3.jpg'
import img4 from '../../public/image-4.jpg'
import img5 from '../../public/image-5.jpg'
import img6 from '../../public/image-6.jpg'




const Community = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Marquee pauseOnHover={true} speed={100} className='text-2xl md:text-3xl lg:text-4xl mb-6 font-black text-amber-600 text-center poppins'>Community Stories & Inspiration</Marquee>
            <p className='text-center  inter '>A space where plant lovers can share their plant journeys, photos, and success stories to inspire others.</p>


            <h2 className="text-center md:text-2xl text-blue-600 text-xl poppins font-black my-12">Users Top 6 Clicks</h2>

            {/* 6 images cards */}

            <div className="grid md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
            <div className="border p-5 border-gray-200 shadow-lg hover:shadow-xl rounded-md">
                <img className="w-[300px] h-[250px] mx-auto text-sm object-cover" src={img1} alt="" />
                <div className="flex items-center justify-between mt-3">
                    <p>12/04/2019</p>
                    <h2>David Kelmen</h2>
                </div>
            </div>
            <div className="border p-5 border-gray-200 shadow-lg hover:shadow-xl rounded-md">
                <img className="w-[300px] h-[250px] mx-auto text-sm object-cover" src={img2} alt="" />
                <div className="flex items-center justify-between mt-3">
                    <p>21/04/2025</p>
                    <h2>Adison James</h2>
                </div>
            </div>
            <div className="border p-5 border-gray-200 shadow-lg hover:shadow-xl rounded-md">
                <img className="w-[300px] h-[250px] mx-auto text-sm object-cover" src={img3} alt="" />
                <div className="flex items-center justify-between mt-3">
                    <p>29/06/2019</p>
                    <h2>James Flick</h2>
                </div>
            </div>
            <div className="border p-5 border-gray-200 shadow-lg hover:shadow-xl rounded-md">
                <img className="w-[300px] h-[250px] mx-auto text-sm object-cover" src={img4} alt="" />
                <div className="flex items-center justify-between mt-3">
                    <p>28/04/2024</p>
                    <h2>Flyod McCarthy</h2>
                </div>
            </div>
            <div className="border p-5 border-gray-200 shadow-lg hover:shadow-xl rounded-md">
                <img className="w-[300px] h-[250px] mx-auto text-sm object-cover" src={img5} alt="" />
                <div className="flex items-center justify-between mt-3">
                    <p>12/11/2022</p>
                    <h2>Neil Kevin</h2>
                </div>
            </div>
            <div className="border p-5 border-gray-200 shadow-lg hover:shadow-xl rounded-md">
                <img className="w-[300px] h-[250px] mx-auto text-sm object-cover" src={img6} alt="" />
                <div className="flex items-center justify-between mt-3">
                    <p>2/11/2023</p>
                    <h2>Thomas Silva </h2>
                </div>
            </div>
           

            </div>
            
        </div>
    );
};

export default Community;