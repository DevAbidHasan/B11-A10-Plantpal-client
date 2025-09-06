import React from 'react';
import { useLoaderData } from 'react-router';
import SinglePlant from './SinglePlant';

const NewPlants = () => {
    const plants = useLoaderData();
    
    return (
        <div className='w-11/12 my-12 md:my-20 mx-auto'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-black text-green-600 text-center poppins'>New Plants</h2>
            <div className='md:mt-18 mt-8'>
               {
                plants.length > 0 ? (
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                        {
                            plants.map((plant,index)=><SinglePlant key={index} plant={plant}></SinglePlant>)
                        }
                    </div>
                ) : (
                    <h2 className='text-center text-md poppins mt-10 text-gray-600 font-semibold -mb-10'>Currently, No Plant Data 📭. Plant will be added soon !</h2>
                )
               }
            </div>
        </div>
    );
};

export default NewPlants;