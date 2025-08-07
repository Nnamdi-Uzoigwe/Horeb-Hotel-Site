import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { calabarHotels } from '../component/Array';

import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { FaWifi, FaSwimmingPool, FaParking, FaUtensils, FaTv } from 'react-icons/fa';

import Footer from '../component/Footer';
import Testimonial from '../component/Testimonial';
import { Link } from 'react-router-dom';

function RoomDetail() {
  const { id } = useParams();
  const room = calabarHotels.find(room => room.id === parseInt(id));
  useEffect(() => {
    console.log('ID from URL:', id);
    console.log('All rooms:', calabarHotels);
    console.log('Found room:', calabarHotels.find(r => r.id === parseInt(id)));
  }, [id]);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl">Room not found</p>
      </div>
    );
  }
  return (
    <div className='relative overflow-x-hidden pt-[90px] bg-gray-50'>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Room Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#7C6A46]">{room.name}</h1>
          <div className="flex items-center mt-2 text-gray-600">
            <IoLocationOutline className="mr-1" />
            <span>{room.location}</span>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <img
              src={room.image}
              alt={`Main view of ${room.name}`}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <img
                key={index}
                src={room.image} // Replace with actual gallery images if available
                alt={`Gallery view ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4 text-[#7C6A46]">Description</h2>
              <p className="text-gray-700">{room.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4 text-[#7C6A46]">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    {amenity === 'WiFi' && <FaWifi className="mr-2 text-[#7C6A46]" />}
                    {amenity === 'Pool' && <FaSwimmingPool className="mr-2 text-[#7C6A46]" />}
                    {amenity === 'Parking' && <FaParking className="mr-2 text-[#7C6A46]" />}
                    {amenity === 'Restaurant' && <FaUtensils className="mr-2 text-[#7C6A46]" />}
                    {amenity === 'TV' && <FaTv className="mr-2 text-[#7C6A46]" />}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h2 className="text-xl font-semibold mb-4 text-[#7C6A46]">Booking Information</h2>
              
              <div className="mb-4">
                <p className="text-2xl font-bold text-[#7C6A46]">
                  ₦{room.pricePerNight.toLocaleString()}
                  <span className="text-sm font-normal text-gray-500"> / night</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">{room.type} Room</p>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Contact Information</h3>
                {room.contact?.phone && (
                  <div className="flex items-center mb-2">
                    <IoCallOutline className="mr-2 text-[#7C6A46]" />
                    <a href={`tel:${room.contact.phone}`} className="hover:underline">
                      {room.contact.phone}
                    </a>
                  </div>
                )}
                {room.contact?.email && (
                  <div className="flex items-center">
                    <IoMailOutline className="mr-2 text-[#7C6A46]" />
                    <a href={`mailto:${room.contact.email}`} className="hover:underline">
                      {room.contact.email}
                    </a>
                  </div>
                )}
              </div>
              <Link to="/payment">
              <button className="w-full bg-[#7C6A46] hover:bg-[#5a4d34] text-white py-3 rounded-lg font-medium transition-colors">
                Book Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
      <Footer />
    </div>
  );
}

export default RoomDetail;