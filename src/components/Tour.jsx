import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col mt-10 md:w-[320px] lg:w-[350px] h-auto relative">
      <img
        src={tour.image}
        alt="img"
        className="w-full max-h-64 sm:h-60 md:w-[full] md:h-60 lg:w-[full] lg:h-80 rounded-t-md object-cover"
      />
      <div className="py-5 px-4 border border-1 border-t-0 border-gray-300 rounded-b-lg text-gray-500 shadow-md hover:shadow-xl">
        <h3 className="text-2xl text-gray-800 text-center mb-5">{tour.name}</h3>
        <p>
          {show ? tour.info : `${tour.info.substring(0, 200)}...`}
          <button
            className=" text-md text-green-400"
            onClick={() => setShow(!show)}
          >
            {show ? "show less" : "read more"}
          </button>
        </p>
        <button
          onClick={() => removeTour(tour.id)}
          className="w-full h-8 mx-0 mt-2 text-green-500 border border-2 border-green-300 rounded-md hover:bg-green-400 hover:text-gray-50 hover:border-0 transition ease-in-out"
        >
          Delete
        </button>
      </div>
      <span className="absolute top-0 left-0 w-16 h-6 bg-emerald-600 rounded-tl-md pl-1 text-gray-50">
        {" "}
        $ {tour.price}
      </span>
    </div>
  );
};

export default Tour;
