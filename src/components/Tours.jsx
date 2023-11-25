import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl sm:text-5xl text-emerald-700">Our Tours</h1>
      <div className="mx-auto w-[150px] mt-5 mb-3 border border-2 border-emerald-400 border-emrald-600"></div>
      <div className="flex flex-wrap md:justify-start items-start sm:gap-5 mx-6 sm:mx-8 md:mx-1 xl:mx-28 sm:p-3 lg:p-4">
        {tours.map((tour) => {
          return (
            <div className="mx-auto my-2">
              <Tour tour={tour} key={tour.id} removeTour={removeTour} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
