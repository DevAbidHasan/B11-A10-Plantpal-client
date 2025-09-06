import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
    const plant =useLoaderData();
    return (
        <div className='w-11/12 mt-10 mx-auto'>
            <h2 className='text-center text-2xl md:text-3xl lg:text-4xl text-blue-600 mb-8 font-black poppins'>🌿{plant.name}</h2>
    
            <img className='md:w-[500px] w-[350px] sm:w-[400px] mb-7 mx-auto md:h-[300px] object-cover' src={plant.image} alt="" />
           <div className='space-y-3 inter'>
             <p className='text-center'><span className='font-bold'>Description : </span>{plant.description}</p>
            <p className='text-center'><span className='font-bold'>Category : </span><span className='text-amber-600 font-bold'>{plant.category}</span></p>
            <p className='text-center'><span className='font-bold'>Care Level : </span><span className='text-green-600 font-bold'>{plant.care_level}</span></p>
            <p className='text-center'><span className='font-bold'>Watering Frequency : </span>{plant.watering_frequency}</p>
            <p className='text-center'><span className='font-bold'>Health Status : </span><span className='text-blue-600 font-bold'>{plant.health_status}</span></p>
            <p className='text-center'><span className='font-bold'>Last Watered : </span>{plant.last_watered}</p>
            <p className='text-center'><span className='font-bold'>Next Watered : </span>{plant.next_watered}</p>
           </div>
            
        </div>
    );
};

export default PlantDetails;