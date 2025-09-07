import React from 'react';
import { Link, useLoaderData } from 'react-router';
import PlantRow from './PlantRow';
import { IoMdEye } from "react-icons/io";

const AllPlants = () => {
    const plants = useLoaderData();
    
    return (
        <div className='sm:w-11/12 w-full mx-auto my-10'>
            <h2 className='text-center text-2xl poppins md:text-3xl text-blue-600 mt-5 mb-10 font-black'>All Plants</h2>
            <div className=''>
                <table className='w-full border border-gray-300 '>
                    <thead className='poppins text-sm text-white bg-blue-700'>
                        <tr className=''>
                            <th className='py-3 border border-gray-300'>No.</th>
                            <th className='py-3 border-gray-300 border'>Plant </th>
                            <th className='py-3 border-gray-300 border'>Category</th>
                            <th className='py-3 border-gray-300 border'>Watering Frequency</th>
                            <th className='py-3 border-gray-300 border'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            plants.length>0 ? (
                                plants.map((plant,index)=><tr  className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}>
                                    <td className='font-bold border border-gray-300 py-2'>{index+1}</td>
                                    <td className='border border-gray-300 text-green-600'>{plant.name}</td>
                                    <td className='border border-gray-300'>{plant.category}</td>
                                    <td className='border border-gray-300'>{plant.watering_frequency}</td>
                                    <td className=' border border-gray-300 '><Link to={`/plants/${plant._id}`} className='btn btn-sm hover:btn-secondary flex items-center gap-2 mx-auto w-[80%]'><IoMdEye className='hidden sm:flex' size={20}/>Details</Link></td>
                                </tr>)
                            ) : (
                              ""
                            )
                        }
                    </tbody>
                </table>
                <div className=''>
                    {
                        plants.length == 0 && <h2 className='text-center text-xl poppins mt-10 text-gray-600 font-bold -mb-10'>No Plant Data</h2>
                    }
                </div>
            </div>

        </div>
    );
};


export default AllPlants;