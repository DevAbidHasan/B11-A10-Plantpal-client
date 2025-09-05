import React from 'react';
import { PiPlant } from "react-icons/pi";
import { Link, NavLink } from 'react-router';

const Privacy = () => {
    return (
        <div className='my-10 mb-25 w-11/12 mx-auto'>
            <h2 className='text-center mb-5 md:text-3xl sm:text-2xl text-xl poppins font-black'>Privacy</h2> <hr/>
            <p className='text-center mt-5 inter'>At <span className='font-bold  text-green-600'>PlantPal </span>! we respect your privacy and are committed to protecting your personal data.</p>
            <ol className='my-12 space-y-3 list-decimal list-inside'>
                <li ><span className='font-bold poppins'>Use of Service :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>PlantPal is designed to help users track plant care activities such as watering, fertilizing, and reminders.</li>
                    <li className='inter'>You agree not to misuse the platform for unlawful or harmful purposes.</li>
                </ul>
                </li>
                 <li ><span className='font-bold poppins'>Accounts :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>You may need to create an account to use certain features.</li>
                    <li className='inter'>You are responsible for keeping your login credentials secure.</li>
                </ul>
                </li>
                <li ><span className='font-bold poppins'>Content :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>You retain ownership of any data you input (e.g., plant details, notes).</li>
                    <li className='inter'>By submitting content, you give PlantPal permission to store and process it to provide services.</li>
                </ul>
                </li>
                <li ><span className='font-bold poppins'>Limitations :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>PlantPal is provided “as is.” We do not guarantee that reminders, tips, or recommendations will always be accurate.</li>
                    <li className='inter'>We are not responsible for damage to your plants due to reliance on the app.</li>
                </ul>
                </li>
                <li ><span className='font-bold poppins'>Termination :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>We reserve the right to suspend or terminate accounts that violate these terms.</li>
                    
                </ul>
                </li>
                <li ><span className='font-bold poppins'>Changes :</span>
                <ul className='list-disc mt-2 ml-0 md:ml-10 list-inside'>
                    <li className='inter'>We may update these terms at any time. Continued use means you accept the changes.</li>
                </ul>
                </li>
            </ol>
          <div className="flex mt-10 justify-center items-center ">
                <NavLink to="/" className="btn btn-primary w-auto">
                    Go Back to Home
                </NavLink>
            </div>
        </div>
    );
};

export default Privacy;