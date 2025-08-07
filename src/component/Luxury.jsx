import React from "react";

import { Link } from "react-router-dom";
import { calabarHotels } from "./Array";
import { IoLocationOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";

function Luxury() {

  return (
    <div className="flex flex-col items-center gap-10 w-screen pt-10 ">
      <div className="background-image-container">
        <div className="w-[100%] bg-[#7C6A46] bg-opacity-80 px-4">
          <div className="lg:pr-20 lg:pl-20 pt-10 pb-10 flex flex-col items-center gap-12 w-full justify-center">
            <div className="flex flex-col items-center text-white gap-2">
              <p
                id="luxury1"
                className="font-medium text-[35px] lg:text-[50px] text-white"
              >
                Featured Properties{" "}
              </p>
              <div className="w-[138px] h-[3px] lg:h-[6px] bg-white"></div>
              <p className=" text-sm lg:text-inherit">
                Handpicked properties by our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 px-5  lg:px-20 gap-16 w-[100vw]">
              {calabarHotels.map((room) => (
                <Link to={`/rooms/${room.id}`} key={room.id} className="block">
                  <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 text-[#7C6A46]">
                    {/* Hotel Image */}
                    <div className="relative">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-48 object-cover"
                      />
                      {room.status && (
                        <span
                          className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-medium text-white ${
                            room.status === "Available"
                              ? "bg-green-500"
                              : room.status === "Pending"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                        >
                          {room.status}
                        </span>
                      )}
                    </div>

                    {/* Hotel Info */}
                    <div className="p-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold">{room.name}</h3>
                        <span className="text-white px-2 py-1 italic rounded-lg bg-[#7C6A46] text-sm">
                          {room.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-gray-600">
                        <IoLocationOutline />
                        <p className="text-sm">{room.locate}</p>
                      </div>

                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <p>{room.rooms} Bedrooms</p>
                        <RxDotFilled />
                        <p>{room.interior}</p>
                      </div>

                      <div className="pt-2">
                        <p className="text-lg font-bold text-[#7C6A46]">
                          ₦{room.pricePerNight}/night
                        </p>
                      </div>

                      {room.note && (
                        <p className="text-xs italic text-red-500">
                          {room.note}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to={"/rooms"}>
          <button className="bg-[#907d59] text-white px-12 py-3 rounded-lg font-semibold hover:bg-[#7C6A46]">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Luxury;
