import React from 'react';
import { useLoaderData } from 'react-router';

import MyPlantCard from './MyPlantCard';

const MyPlants = () => {
    const plants = useLoaderData();
    return (
        <div className='mt-15 w-11/12 mx-auto'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-black text-green-600 text-center poppins'>My Plants : {plants.length}</h2>
            <div className='md:mt-12 mt-5'>
               {
                plants.length > 0 ? (
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                        {
                            plants.map((plant,index)=><MyPlantCard key={index} plant={plant}></MyPlantCard>)
                        }
                    </div>
                ) : (
                    <h2 className='text-center text-md poppins mt-10 text-gray-600 font-semibold -mb-10'>You have added zero plant.</h2>
                )
               }
            </div>
        </div>
    );
};

export default MyPlants;