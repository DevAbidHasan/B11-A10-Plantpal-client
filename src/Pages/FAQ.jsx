import React from 'react';

const FAQ = () => {
    return (
        <div className='my-10 w-11/12 md:my-20 mx-auto'>
            <h2 className='font-black text-center lg:text-3xl poppins sm:text-2xl text-xl md:mb-20 mb-10 text-blue-600 '>Frequently Asked Questions</h2>
            <div className='inter'>
                {/* q-1 */}
                <div className='space-y-4 mb-5 hover:shadow-xl hover:shadow-blue-100 border p-3 rounded-lg border-gray-300 bg-white sm:p-5'>
                    <h2 className='border-b pb-3 border-gray-300 border-dashed'><span className='font-semibold text-blue-700'>Question - 1 :</span> How do I add a new plant to my PlantPal dashboard?</h2>
                    <h2 className='text-gray-500'><span className='font-semibold'>Answer : </span>To add a new plant, log in to your account, go to the “Add Plant” section, fill in the plant’s name, type, watering schedule, and optional photo. Once saved, the plant will appear in your My Plants dashboard with reminders and care tracking.</h2>
                </div>
                {/* q-2 */}
                <div className='space-y-4 mb-5 hover:shadow-xl hover:shadow-blue-100 border p-3 rounded-lg border-gray-300 bg-white sm:p-5'>
                    <h2 className='border-b pb-3 border-gray-300 border-dashed'><span className='font-semibold text-blue-700'>Question - 2 :</span> Can I track multiple plants at the same time?</h2>
                    <h2 className='text-gray-500'><span className='font-semibold'>Answer : </span>Yes! PlantPal lets you track as many plants as you want. Each plant gets its own card with care reminders, watering/fertilizing schedule, and notes. You can easily switch between plants on your dashboard.</h2>
                </div>
                 {/* q-3 */}
                <div className='space-y-4 mb-5 hover:shadow-xl hover:shadow-blue-100 border p-3 rounded-lg border-gray-300 bg-white sm:p-5'>
                    <h2 className='border-b pb-3 border-gray-300 border-dashed'><span className='font-semibold text-blue-700'>Question - 3 :</span> How does PlantPal remind me to water or care for my plants?</h2>
                    <h2 className='text-gray-500'><span className='font-semibold'>Answer : </span>PlantPal tracks the care schedule you set for each plant. It shows upcoming tasks on your dashboard. You can also enable browser notifications (or email reminders if implemented) to get alerts when a plant needs attention.</h2>
                </div>
                 {/* q-4 */}
                <div className='space-y-4 mb-5 hover:shadow-xl hover:shadow-blue-100 border p-3 rounded-lg border-gray-300 bg-white sm:p-5'>
                    <h2 className='border-b pb-3 border-gray-300 border-dashed'><span className='font-semibold text-blue-700'>Question - 4 :</span> Can I see my plant care history?</h2>
                    <h2 className='text-gray-500'><span className='font-semibold'>Answer : </span>Yes! Each plant card logs your actions, such as watering, fertilizing, or repotting. This helps you track the health of your plants over time and identify patterns for better care.</h2>
                </div>
                 {/* q-5 */}
                <div className='space-y-4 mb-5 hover:shadow-xl hover:shadow-blue-100 border p-3 rounded-lg border-gray-300 bg-white sm:p-5'>
                    <h2 className='border-b pb-3 border-gray-300 border-dashed'><span className='font-semibold text-blue-700'>Question - 5 :</span> Is PlantPal free to use, or are there premium features?</h2>
                    <h2 className='text-gray-500'><span className='font-semibold'>Answer : </span>PlantPal is free to use for basic plant tracking, reminders, and educational tips. In the future, premium features may include advanced analytics, plant recommendations, or a community marketplace for plant care products.</h2>
                </div>
                
            </div>
        </div>
    );
};

export default FAQ;