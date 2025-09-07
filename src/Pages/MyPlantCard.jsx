import React, { useContext } from 'react';
import { Link } from 'react-router';
import { IoEye } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';


const MyPlantCard = ({plant, plants, setPlants}) => {

    const {setUser}=useContext(AuthContext);

   const handlePlantDelete = (_id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
        
            // start deleting the coffee when user will confirm
            fetch(`http://localhost:3000/plants/${plant._id}`,{
                method : "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your plant has been deleted.",
                    icon: "success"
                    });

                    // remove the coffee from the UI & state
                    
                    const remainingPlants = plants.filter(cof=>cof._id !== _id);
                    setPlants(remainingPlants);
                }
            })
            
            
            
        }
  });
};

    return (
        <div className='border flex flex-col items-center justify-between gap-2 px-3 py-5 rounded-lg border-gray-200 bg-white shadow-sm hover:shadow-xl hover:shadow-gray-200 '>
            <div className='space-y-2'>
                <h2 className='font-bold text-center poppins'>{plant.name}</h2>
            <img className='w-[300px] rounded-sm h-[180px] object-cover ' src= {plant.image}  alt={`Picture of ${plant.name}`} /> 
            <h2 className='font-bold text-center text-blue-600'>{plant.category}</h2>
            <div className='flex text-sm sm:text-md items-center sm:gap-8 gap-2 md:gap-12 lg:gap-18 lg:justify-between justify-center'>
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
    <Link to={`/update-plant/${plant._id}`}>
        <button title='Update Details' className="btn join-item bg-black hover:bg-gray-600 hover:rounded-md text-white"><FaPen size={16}/></button>
    </Link>
    <Link>
        <button onClick={()=>handlePlantDelete(plant._id)} title='Delete Plant' className="btn join-item text-white hover:rounded-md hover:bg-red-400 bg-red-500"><MdDelete size={16}/></button></Link>
    </div>
        </div>
    );
};

export default MyPlantCard;