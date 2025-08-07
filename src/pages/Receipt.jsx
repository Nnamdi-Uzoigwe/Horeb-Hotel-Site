import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../component/Footer';
import { FiCheckCircle } from 'react-icons/fi';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCreditCard, FaCalendarAlt } from 'react-icons/fa';

function Receipt() {
    const location = useLocation();
    const paymentData = location.state || JSON.parse(localStorage.getItem('paymentInfo')) || {};
    
    // Destructure all possible data
    const {
        firstname = '',
        lastname = '',
        email = '',
        phone = '',
        address = '',
        address2 = '',
        city = '',
        state = '',
        country = '',
        cardNumber = '',
        month = '',
        year = '',
        guestFirstName = '',
        guestLastName = ''
    } = paymentData;

    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Success Header */}
            <div className='bg-white shadow-sm'>
                <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center'>
                    <FiCheckCircle className='mx-auto h-16 w-16 text-green-500 mb-4' />
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Payment Successful!</h1>
                    <p className='text-lg text-gray-600'>Thank you for your reservation. Here's your receipt.</p>
                </div>
            </div>

            {/* Receipt Card */}
            <div className='max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
                <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                    {/* Guest Information Section */}
                    <div className='p-6 border-b'>
                        <h2 className='text-xl font-semibold text-gray-800 flex items-center mb-4'>
                            <FaUser className='mr-2 text-[#7C6A46]' />
                            Guest Information
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <p className='text-sm text-gray-500'>Full Name</p>
                                <p className='font-medium'>{firstname} {lastname}</p>
                            </div>
                            <div>
                                <p className='text-sm text-gray-500'>Email</p>
                                <p className='font-medium flex items-center'>
                                    <FaEnvelope className='mr-1 text-sm' /> {email}
                                </p>
                            </div>
                            <div>
                                <p className='text-sm text-gray-500'>Phone</p>
                                <p className='font-medium flex items-center'>
                                    <FaPhone className='mr-1 text-sm' /> {phone}
                                </p>
                            </div>
                            <div>
                                <p className='text-sm text-gray-500'>Country</p>
                                <p className='font-medium'>{country}</p>
                            </div>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className='p-6 border-b'>
                        <h2 className='text-xl font-semibold text-gray-800 flex items-center mb-4'>
                            <FaMapMarkerAlt className='mr-2 text-[#7C6A46]' />
                            Address
                        </h2>
                        <div className='space-y-1'>
                            <p className='font-medium'>{address}</p>
                            {address2 && <p className='font-medium'>{address2}</p>}
                            <p className='font-medium'>{city}, {state}</p>
                            <p className='font-medium'>{country}</p>
                        </div>
                    </div>

                    {/* Payment Information Section */}
                    <div className='p-6 border-b'>
                        <h2 className='text-xl font-semibold text-gray-800 flex items-center mb-4'>
                            <FaCreditCard className='mr-2 text-[#7C6A46]' />
                            Payment Information
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <p className='text-sm text-gray-500'>Card Number</p>
                                <p className='font-medium'>•••• •••• •••• {cardNumber.slice(-4)}</p>
                            </div>
                            <div>
                                <p className='text-sm text-gray-500'>Expiry Date</p>
                                <p className='font-medium flex items-center'>
                                    <FaCalendarAlt className='mr-1 text-sm' /> {month} {year}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Guest Section */}
                    {(guestFirstName || guestLastName) && (
                        <div className='p-6'>
                            <h2 className='text-xl font-semibold text-gray-800 flex items-center mb-4'>
                                <FaUser className='mr-2 text-[#7C6A46]' />
                                Additional Guest
                            </h2>
                            <p className='font-medium'>{guestFirstName} {guestLastName}</p>
                        </div>
                    )}
                </div>

                {/* Confirmation Message */}
                <div className='mt-8 text-center'>
                    <p className='text-gray-600 mb-4'>
                        A confirmation has been sent to <span className='font-semibold'>{email}</span>
                    </p>
                    <button
                        onClick={() => window.print()}
                        className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#7C6A46] hover:bg-[#5a4d34] focus:outline-none'
                    >
                        Print Receipt
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Receipt;