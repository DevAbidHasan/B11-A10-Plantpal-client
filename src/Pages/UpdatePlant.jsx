import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const UpdatePlant = () => {


    const plant = useLoaderData();
    const {user}=useContext(AuthContext);
    // console.log(plant);


    const navigate = useNavigate();
    const location = useLocation();

    const handleFormSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const newPlant = Object.fromEntries(formData.entries());
//   console.log(newPlant);

  // fetching updatedData and sending to database
  fetch(`https://b11-a10-plantpal-server.vercel.app/update-plant/${plant._id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newPlant),
  })
    .then((res) => res.json()) //
    .then((data) => {
    //   console.log("Update response:", data);

      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Congratulations",
          text: "Plant details updated successfully",
          icon: "success",
          timer: 1500,
          confirmButtonText: "OK",
        }).then(() => {
          navigate(`/my-plants/${encodeURIComponent(user?.email)}`)
        });
      } else {
        Swal.fire({
          title: "No Changes",
          text: "Nothing was updated.",
          icon: "info",
          confirmButtonText: "OK",
        });
        navigate(`/my-plants/${encodeURIComponent(user?.email)}`)
      }
    })
    .catch((error) => {
    //   console.error("Error updating plant:", error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong while updating the plant.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      navigate(`/my-plants/${encodeURIComponent(user?.email)}`)
    });
};



    return (
         <div className='w-11/12 my-10 mx-auto'>
            <Helmet>
                <title>
                    Plantpal || Update Plant
                </title>
            </Helmet>
            <h2 className='text-2xl md:text-3xl lg:text-4xl mb-8 md:mt-15 md:mb-15 font-black text-green-600 text-center poppins'>Update Plant</h2>
            <div className='inter'>
                <form onSubmit={handleFormSubmit} className='border p-6 border-gray-300 rounded-md' action="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Plant Image</label>
                    <input required type="text" name="image" className="input w-full" defaultValue={plant.image} />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Plant Name</label>
                    <input required type="text" name="name" className="input w-full" defaultValue={plant.name} />
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
                    <input required type="text" name="description" className="input w-full" defaultValue={plant.description} />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Care Level</label>
                     <select name='care_level' className='border pl-3 border-gray-300 bg-white py-2.5 rounded-sm'>
                        <option defaultChecked>Select care level</option>
                        <option value="Easy">Easy</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Difficult">Difficult</option>
                    </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Watering Frequency</label>
                    <input required type="text" name="watering_frequency" className="input w-full" defaultValue={plant.watering_frequency} />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Last Watered Date</label>
                    <input required type="date" name="last_watered" className="input w-full" defaultValue={plant.last_watered} />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Next Watered Date</label>
                    <input required type="date" name="next_watered" className="input w-full" defaultValue={plant.next_watered} />
                    </fieldset>
                    <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label"> Plant Health Status</label>
                    <input required type="text" name="health_status" className="input w-full" defaultValue={plant.health_status} />
                    </fieldset>
                    <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label"> User Name</label>
                    <input required type="text" name="username" className="input w-full" value={user.displayName} />
                    </fieldset>
                   
                </div>
                <fieldset className="fieldset my-6 bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label"> User Email</label>
                    <input  type="text" name="email" className="input w-full" value={user.email} />
                </fieldset>
                
                <input className='btn btn-primary inter w-full' type="submit" value="Update Plant" />

            </form>
           {/* <Link className='flex justify-center my-8' to="/">
            <button className='btn btn-secondary '>Back to Home</button>
            </Link> */}
            </div>
        </div>
    );
};

export default UpdatePlant;