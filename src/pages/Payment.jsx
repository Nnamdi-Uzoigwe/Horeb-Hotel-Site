
import { useState } from 'react';
import Footer from '../component/Footer';
import logo from '../image/logo.svg';
import { CiCreditCard1, CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { RiAccountBoxLine } from 'react-icons/ri';
import masterlogo from '../image/mastercard.png';
import visalogo from '../image/visacard.png';
import vervelogo from '../image/vervecard.png';
import { useNavigate } from 'react-router-dom';

function Payment() {
    const months = ["Month", "01 Jan", "02 Feb", "03 Mar", "04 Apr", "05 May", "06 Jun", "07 Jul", "08 Aug", "09 Sep", "10 Oct", "11 Nov", "12 Dec"];
    const years = ["Year", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033"];
    const countries = ["Select Country", "USA", "Nigeria", "Uganda", "Canada", "Argentina", "Ghana", "South Africa", "Jamaica", "China", "Australia"];

    const [formData, setFormData] = useState({
        cardNumber: '',
        month: '',
        year: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        address2: '',
        state: '',
        city: '',
        guestFirstName: '',
        guestLastName: ''
    });

    const [cardImage, setCardImage] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [showGuestForm, setShowGuestForm] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }

        // Card type detection
        if (name === 'cardNumber') {
            detectCardType(value);
        }
    };

    const detectCardType = (cardNumber) => {
        const masterCardPattern = /^5[1-5]\d{14}$/;
        const verveCardPattern = /^(506(1|2|3|7)|5047)\d{12}$/;
        const visaCardPattern = /^4\d{12}(?:\d{3})?$/;

        if (verveCardPattern.test(cardNumber)) {
            setCardImage(vervelogo);
        } else if (masterCardPattern.test(cardNumber)) {
            setCardImage(masterlogo);
        } else if (visaCardPattern.test(cardNumber)) {
            setCardImage(visalogo);
        } else {
            setCardImage('');
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
        if (!formData.month || formData.month === "Month") newErrors.month = 'Month is required';
        if (!formData.year || formData.year === "Year") newErrors.year = 'Year is required';
        if (!formData.firstname) newErrors.firstname = 'First name is required';
        if (!formData.lastname) newErrors.lastname = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.country || formData.country === "Select Country") newErrors.country = 'Country is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!checkbox) newErrors.checkbox = 'You must agree to terms and conditions';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Store in localStorage
            localStorage.setItem('paymentInfo', JSON.stringify(formData));
            navigate('/receipt', { state: formData });
        }
    };

    const toggleGuestForm = () => {
        setShowGuestForm(!showGuestForm);
    };

    return (
        <div className='overflow-x-hidden bg-gray-50'>
            {/* Header */}
            <div className='flex justify-between w-screen py-6 px-4 lg:px-20 items-center bg-white shadow-md'>
                <img src={logo} alt="logo" className='h-10' />
            </div>

            {/* Payment Form */}
            <div className='container mx-auto p-4 md:p-12'>
                <div className='max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md'>
                    <div className='flex items-center gap-4 mb-4'>
                        <CiCreditCard1 size={30} />
                        <h1 className='text-2xl font-bold'>Payment Information</h1>
                    </div>
                    <hr className='mb-6' />

                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {/* Card Information */}
                        <div className='space-y-4'>
                            <h2 className='text-xl font-semibold'>Card Details</h2>
                            <div>
                                <label className='block font-medium mb-1'>Card Number</label>
                                <div className='flex items-center border rounded-md overflow-hidden'>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleChange}
                                        placeholder='1234 5678 9012 3456'
                                        className='flex-1 h-10 px-3 outline-none'
                                    />
                                    {cardImage && <img src={cardImage} alt="card" className='h-8 mx-2' />}
                                </div>
                                {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label className='block font-medium mb-1'>Expiry Month</label>
                                    <select
                                        name="month"
                                        value={formData.month}
                                        onChange={handleChange}
                                        className='w-full h-10 border rounded-md px-3'
                                    >
                                        {months.map((month) => (
                                            <option value={month} key={month}>{month}</option>
                                        ))}
                                    </select>
                                    {errors.month && <p className="text-red-500 text-sm mt-1">{errors.month}</p>}
                                </div>
                                <div>
                                    <label className='block font-medium mb-1'>Expiry Year</label>
                                    <select
                                        name="year"
                                        value={formData.year}
                                        onChange={handleChange}
                                        className='w-full h-10 border rounded-md px-3'
                                    >
                                        {years.map((year) => (
                                            <option value={year} key={year}>{year}</option>
                                        ))}
                                    </select>
                                    {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Guest Information */}
                        <div className='space-y-4'>
                            <div className='flex items-center gap-4'>
                                <RiAccountBoxLine size={25} />
                                <h2 className='text-xl font-semibold'>Guest Information</h2>
                            </div>
                            <hr className='my-2' />

                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label className='block font-medium mb-1'>First Name</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        placeholder='John'
                                        className='w-full h-10 border rounded-md px-3'
                                    />
                                    {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
                                </div>
                                <div>
                                    <label className='block font-medium mb-1'>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        placeholder='Doe'
                                        className='w-full h-10 border rounded-md px-3'
                                    />
                                    {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
                                </div>
                            </div>

                            <div>
                                <label className='block font-medium mb-1'>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='john.doe@example.com'
                                    className='w-full h-10 border rounded-md px-3'
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className='block font-medium mb-1'>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder='+234 800 000 0000'
                                    className='w-full h-10 border rounded-md px-3'
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className='block font-medium mb-1'>Country/Region</label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className='w-full h-10 border rounded-md px-3'
                                >
                                    {countries.map((country) => (
                                        <option value={country} key={country}>{country}</option>
                                    ))}
                                </select>
                                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                            </div>

                            <div>
                                <label className='block font-medium mb-1'>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder='123 Main Street'
                                    className='w-full h-10 border rounded-md px-3'
                                />
                                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                            </div>

                            <div>
                                <label className='block font-medium mb-1'>Address 2 (Optional)</label>
                                <input
                                    type="text"
                                    name="address2"
                                    value={formData.address2}
                                    onChange={handleChange}
                                    placeholder='Apartment, suite, etc.'
                                    className='w-full h-10 border rounded-md px-3'
                                />
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label className='block font-medium mb-1'>State</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        placeholder='Lagos'
                                        className='w-full h-10 border rounded-md px-3'
                                    />
                                </div>
                                <div>
                                    <label className='block font-medium mb-1'>City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder='Ikeja'
                                        className='w-full h-10 border rounded-md px-3'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Additional Guest */}
                        <div className='space-y-4'>
                            <div className='flex items-center gap-2 cursor-pointer' onClick={toggleGuestForm}>
                                {showGuestForm ? <CiCircleMinus size={25} /> : <CiCirclePlus size={25} />}
                                <span className='font-medium'>Add guest name</span>
                            </div>
                            
                            {showGuestForm && (
                                <div className='bg-gray-50 p-4 rounded-md space-y-4'>
                                    <p className='text-sm text-gray-600'>
                                        This reservation is in your name. To allow another guest to check in, add their name below.
                                    </p>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div>
                                            <label className='block font-medium mb-1'>Guest First Name</label>
                                            <input
                                                type="text"
                                                name="guestFirstName"
                                                value={formData.guestFirstName}
                                                onChange={handleChange}
                                                placeholder="Guest's first name"
                                                className='w-full h-10 border rounded-md px-3'
                                            />
                                        </div>
                                        <div>
                                            <label className='block font-medium mb-1'>Guest Last Name</label>
                                            <input
                                                type="text"
                                                name="guestLastName"
                                                value={formData.guestLastName}
                                                onChange={handleChange}
                                                placeholder="Guest's last name"
                                                className='w-full h-10 border rounded-md px-3'
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Terms and Conditions */}
                        <div className='flex items-start gap-3'>
                            <input
                                type="checkbox"
                                id="terms"
                                checked={checkbox}
                                onChange={() => setCheckbox(!checkbox)}
                                className='mt-1'
                            />
                            <label htmlFor="terms" className='text-sm'>
                                By clicking this you agree to our <a href="/terms" className='font-bold underline'>terms and conditions</a>
                            </label>
                        </div>
                        {errors.checkbox && <p className="text-red-500 text-sm">{errors.checkbox}</p>}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className='w-full bg-[#7C6A46] text-white py-3 rounded-md font-bold hover:bg-[#5a4d34] transition-colors'
                        >
                            Book Reservation
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Payment;