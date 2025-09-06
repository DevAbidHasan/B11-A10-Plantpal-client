import React from 'react';
import { Link } from 'react-router';
import defaultImage from '../../public/treeavatar.jpg';

const SinglePlant = ({plant}) => {
    return (
        <div className='border flex items-center justify-center flex-col gap-2 px-3 py-5 rounded-lg border-gray-200 bg-white shadow-sm hover:shadow-xl hover:shadow-gray-200 '>
            <h2 className='font-bold poppins'>{plant.name}</h2>
            <img className='w-[300px] rounded-sm h-[180px] object-cover ' src= {plant.image}  alt={`Picture of ${plant.name}`} /> 
            <h2 className='font-bold text-blue-600'>{plant.category}</h2>
            <div className='flex text-sm sm:text-md items-center sm:gap-8 gap-5 md:gap-12 lg:gap-18 justify-between'>
                <p>Care : <span className='text-green-600 font-bold'>{plant.care_level}</span></p>
                <p>Health : <span className='text-amber-600'>{plant.health_status}</span></p>
            </div>
            <div className=''>
            <Link to={`/plants/${plant._id}`} className=''>
            <button title='Click for full details' className='btn mt-2 btn-primary'>View Details</button>
            </Link>
            </div>
        </div>
    );
};

export default SinglePlant; 