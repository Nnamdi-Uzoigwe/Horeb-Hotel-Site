import horeb from "../image/horeb.jpeg";

function Aboutdetail() {
  return (
    <div className="lg:px-20 lg:py-14">
      <div className="flex flex-col lg:flex-row  gap-20 justify-between items-center px-5 lg:pl-8">
        <div className="bg-[#7C6A46] lg:w-[450px] lg:h-[513px] w-[350px] h-[413px]  relative">
          <img
            src={horeb}
            alt="ceo"
            className="lg:w-[450px] lg:h-[513px] w-[350px] h-[413px] absolute top-8 right-8 "
          />
        </div>
        <div>
          <div className="py-2">
            <p className="font-bold text-[1.5rem]">Horeb Emmanuel</p>
            <p className="font-bold italic">Real Estate Professional</p>
          </div>
          <p className="w-[100%] lg:w-[579px] text-[15px] pb-6">
            Horeb Hotels and Associates is a premier real estate firm in Calabar
            Nigeria, dedicated to helping clients find hotels and properties
            that match their lifestyle and investment goals. With years of
            expertise in the real estate market, we specialize in luxury
            residences, hotels, commercial spaces, and investment properties
            across the country's most sought-after locations. At HH and
            Associates, we are committed to delivering personalized services,
            market insights, and seamless transactions. Our team of
            professionals works closely with buyers, sellers, and investors to
            provide tailored solutions that meet their unique needs. Whether you
            are looking for a dream home, a strategic business location, or a
            high-value investment, we ensure a smooth and rewarding experience.
            Guided by integrity, innovation, and customer satisfaction, Paradise
            View continues to set new standards in the Nigerian real estate
            industry. Let us help you turn your vision into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutdetail;
