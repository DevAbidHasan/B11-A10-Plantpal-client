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
import CountUp from "react-countup";
import { PiUserCheckFill } from "react-icons/pi";
import { PiPottedPlantFill } from "react-icons/pi";
import { IoWater } from "react-icons/io5";





const Community = () => {
    return (
        <div className='mx-auto'>
            <Marquee pauseOnHover={true} speed={100} className='text-2xl py-2 md:text-3xl lg:text-4xl mb-6 font-black text-amber-600 text-center poppins'>Community Stories & Inspiration</Marquee>
            
            <div className="w-11/12 mx-auto">
                <p className='text-center  text-gray-500 inter '>A space where plant lovers can share their plant journeys, photos, and success stories to inspire others.</p>

                {/* user stories cards */}
                <div className="md:grid-cols-4 my-16 grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="flex text-center space-y-2 items-center border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:shadow-purple-100 justify-center flex-col border p-5">
                       <PiUserCheckFill className="text-purple-700" size={80}/>
                       <h2 className="lg:text-3xl text-xl sm:text-2xl poppins font-black text-center text-blue-600">
                             <CountUp enableScrollSpy={true} scrollSpyOnce={true}  end={3500} duration={5}/>+
                       </h2>
                       <p className="inter text-gray-500">Active users caring for their plants daily.</p>
                    </div>
                    <div className="flex text-center space-y-2 items-center border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:shadow-green-100 justify-center flex-col border p-5">
                       <PiPottedPlantFill className="text-green-600" size={80}/>
                       <h2 className="lg:text-3xl text-xl sm:text-2xl poppins font-black text-center text-blue-600">
                             <CountUp enableScrollSpy={true} scrollSpyOnce={true}  end={300} duration={5}/>+
                       </h2>
                       <p className="inter text-gray-500">Plants tracked across our community.</p>
                    </div>
                    <div className="flex text-center space-y-2 items-center border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-100 justify-center flex-col border p-5">
                       <IoWater className="text-blue-600" size={80}/>
                       <h2 className="lg:text-3xl text-xl sm:text-2xl poppins font-black text-center text-blue-600">
                             <CountUp enableScrollSpy={true} scrollSpyOnce={true}  end={15000} duration={5}/>+
                       </h2>
                       <p className="inter  text-gray-500">Waterings, fertilizations, and repottings logged.</p>
                    </div>
                    <div className="flex text-center space-y-2 items-center border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:shadow-amber-100 justify-center flex-col border p-5">
                       <RiUserCommunityLine className="text-amber-600" size={80}/>
                       <h2 className="lg:text-3xl text-xl sm:text-2xl poppins font-black text-center text-blue-600">
                             <CountUp enableScrollSpy={true} scrollSpyOnce={true}  end={700} duration={5}/>+
                       </h2>
                       <p className="inter  text-gray-500">Shared journeys, tips, and plant photos.</p>
                    </div>
                </div>
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
            
        </div>
    );
};

export default Community;