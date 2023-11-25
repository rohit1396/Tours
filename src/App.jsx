import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const deleteTours = tours.filter((tour) => tour.id !== id);
    setTours(deleteTours);
  };
  const getTours = async () => {
    setLoading(true);
    try {
      const resposne = await fetch(url);
      const data = await resposne.json();
      console.log(data);
      setLoading(false);
      setTours(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main className="w-auto h-80 text-blue-500 flex justify-center items-center">
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="w-auto flex flex-col justify-center items-center my-24 mx-4">
        <h1 className="text-xl sm:text-3xl text-[#71717a]">No Tours Left</h1>
        <div className="my-4 w-[100px] border border-b-2 border-[#6ee7b7]"></div>
        <button
          onClick={getTours}
          className="w-28 h-8 bg-green-400 rounded-md pointer text-gray-50"
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="w-full h-full bg-[#f8fafc]">
      <div className="w-auto h-auto flex flex-col p-1 md:p-8">
        {<Tours tours={tours} removeTour={removeTour} />}
      </div>
    </div>
  );
};

export default App;
