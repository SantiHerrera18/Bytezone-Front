/* eslint-disable react/no-unescaped-entities */
import CardHolder from "@/components/Home/CardHolder";
import Slider from "@/components/Home/Slider";
import images from "@/helpers/sliderImgs";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple-500 to-purple-50 flex items-center min-h-screen mt-6 flex-col ">
      <h1 className=" self-center select-none text-center font-extrabold pb-9 text-6xl w-full">
        BYTE<span className="text-purple-100">ZONE</span>
      </h1>
      <Slider images={images} />
      <div className="w-full bg-purple-950 bg-opacity-85 text-white m-4 pb-20">
        <h2 className="text-center font-semibold mt-6 p-4  text-3xl">
          Find all you want
        </h2>
        <p className="w-2/3 text-purple-300 text-center text-lg m-auto">
          ByteZone is your online store specialized in technology, where you'll
          find a wide selection of gadgets, electronic devices, and cutting-edge
          accessories. We stand out for offering high-quality products,
          competitive prices, and personalized customer service, so you can
          always enjoy the best shopping experience.
        </p>
      </div>
      <h2 className="text-3xl mt-5 font-semibold w-3/5 text-center pb-7 border-b-4 border-b-purple-950">
        Products
      </h2>
      <CardHolder />
    </div>
  );
}
