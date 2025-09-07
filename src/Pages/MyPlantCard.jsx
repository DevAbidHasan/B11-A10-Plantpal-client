import React from 'react';
import { Link } from 'react-router';
import { IoEye } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const MyPlantCard = ({plant}) => {
    return (
        <div className='border flex flex-col items-center justify-between gap-2 px-3 py-5 rounded-lg border-gray-200 bg-white shadow-sm hover:shadow-xl hover:shadow-gray-200 '>
            <div className='space-y-2'>
                <h2 className='font-bold text-center poppins'>{plant.name}</h2>
            <img className='w-[300px] rounded-sm h-[180px] object-cover ' src= {plant.image}  alt={`Picture of ${plant.name}`} /> 
            <h2 className='font-bold text-center text-blue-600'>{plant.category}</h2>
            <div className='flex text-sm sm:text-md items-center sm:gap-8 gap-5 md:gap-12 lg:gap-18 justify-between'>
                <p>Care : <span className='text-green-600 font-bold'>{plant.care_level}</span></p>
                <p>Health : <span className='text-amber-600'>{plant.health_status}</span></p>
            </div>
            </div>
           
            {/* <Link to={`/plants/${plant._id}`} className=''>
            <button title='Click for full details' className=''>View Details</button>
            </Link> */}
            <div className="flex mt-5 items-center justify-between gap-8">
    <Link to={`/plants/${plant._id}`}>
        <button title='View Details' className="btn join-item text-white hover:bg-[#f7d8af] hover:rounded-md bg-[#D2B48C] "><IoEye size={16}/></button>
    </Link>
    <Link >
        <button title='Edit Details' className="btn join-item bg-black hover:bg-gray-600 hover:rounded-md text-white"><FaPen size={16}/></button>
    </Link>
    <Link>
        <button title='Delete Plant' className="btn join-item text-white hover:rounded-md hover:bg-red-400 bg-red-500"><MdDelete size={16}/></button></Link>
    </div>
        </div>
    );
};

export default MyPlantCard;