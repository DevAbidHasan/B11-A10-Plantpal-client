import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SinglePlant from './SinglePlant';

const NewPlants = () => {
    const plants = useLoaderData();
    const [visiblePlants, setVisiblePlants]=useState(plants.slice(0,6));
    const [showAll, setShowAll]=useState(true);
    const handleToggle=()=>{
        setShowAll(!showAll);
        const demo = showAll ? plants : plants.slice(0,6);
        setVisiblePlants(demo); 
    }
    
    return (
        <div className='w-11/12 my-12 md:my-20 mx-auto'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-black text-green-600 text-center poppins'>New Plants</h2>
            <div className='md:mt-18 mt-8'>
               {
                visiblePlants.length > 0 ? (
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                        {
                            visiblePlants.map((plant,index)=><SinglePlant setVisiblePlants={setVisiblePlants} key={index} plant={plant}></SinglePlant>)
                        }
                    </div>
                ) : (
                    <h2 className='text-center text-md poppins mt-10 text-gray-600 font-semibold -mb-10'>Currently, No Plant Data 📭. Plant will be added soon !</h2>
                )
               }
            </div>
            {
                <div className='mt-12'>
                    <button className='btn btn-primary flex items-center justify-center mx-auto' onClick={handleToggle}>{showAll ? "See All" : "See Less"}</button>
                </div>
            }
        </div>
    );
};

export default NewPlants;