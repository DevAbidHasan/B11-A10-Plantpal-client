import React from 'react';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const AddPlant = () => {

    const navigate=useNavigate();

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        // alert("clicked");
        const form=e.target;
        const formData= new FormData(form);
        const newPlant=Object.fromEntries(formData.entries());
        console.log(newPlant);

        // send data to DB through server
        fetch('http://localhost:3000/plants' ,{
            method:"POST",
            headers :{
                "content-type":"application/json"
            },
            body : JSON.stringify(newPlant)
        })
        .then(res=>res.json())
        .then((data)=>{
            if(data.insertedId){
                Swal.fire({
                title: "Plant added successfully!",
                icon: "success",
                timerProgressBar: true
                });
                // form.reset();
                navigate("/");
            }
        })



        // form.reset();
    }

    return (
        <div className='w-11/12 my-10 mx-auto'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl mb-10 md:mt-15 md:mb-15 font-black text-green-600 text-center poppins'>Add Plant</h2>
            <div className='inter'>
                <form onSubmit={handleFormSubmit} className='border p-6 border-gray-300 rounded-md' action="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Plant Image</label>
                    <input required type="text" name="image" className="input w-full" placeholder="Enter plant image" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Plant Name</label>
                    <input required type="text" name="name" className="input w-full" placeholder="Enter plant name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Plant Category</label>
                    {/* <input required type="dropdown" name="category" className="input w-full" /> */}
                    <select name='category' className='border pl-3 border-gray-300 bg-white py-2.5 rounded-sm'>
                        <option defaultChecked>Select plant category</option>
                        <option value="Succulent">Succulent</option>
                        <option value="Fern">Fern</option>
                        <option value="Flowering">Flowering</option>
                    </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Plant Description</label>
                    <input required type="text" name="description" className="input w-full" placeholder="Enter plant description" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Care Level</label>
                     <select name='care_level' className='border pl-3 border-gray-300 bg-white py-2.5 rounded-sm'>
                        <option defaultChecked>Select care level</option>
                        <option value="easy">Easy</option>
                        <option value="moderate">Moderate</option>
                        <option value="difficult">Difficult</option>
                    </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Watering Frequency</label>
                    <input required type="text" name="watering_frequency" className="input w-full" placeholder="Enter watering frequency (e.g., every 3 days)" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Last Watered Date</label>
                    <input required type="date" name="last_watered" className="input w-full" placeholder="Enter last watered date" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Next Watered Date</label>
                    <input required type="date" name="next_watered" className="input w-full" placeholder="Enter next watered date" />
                    </fieldset>
                    <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label"> Plant Health Status</label>
                    <input required type="text" name="health_status" className="input w-full" placeholder="Enter health status" />
                    </fieldset>
                    <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label"> User Name</label>
                    <input required type="text" name="username" className="input w-full" placeholder="Enter username" />
                    </fieldset>
                   
                </div>
                <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label"> User Email</label>
                    <input  type="text" name="email" className="input w-full" placeholder="Enter user email" />
                </fieldset>
                
                <input className='btn btn-primary inter w-full' type="submit" value="Add Plant" />

            </form>
           {/* <Link className='flex justify-center my-8' to="/">
            <button className='btn btn-secondary '>Back to Home</button>
            </Link> */}
            </div>
        </div>
    );
};

export default AddPlant;