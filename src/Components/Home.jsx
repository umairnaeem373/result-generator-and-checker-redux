import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="border rounded-xl shadow-xl py-16 w-2/4">
      <h1 className="text-4xl  text-center font-bold w-full">
        Gradebook Portal
      </h1>
      <div className="mx-auto mt-10 w-2/4">
        <button
          class="text-white ms-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            navigate("/adminLogin");
          }}
        >
          Admin Panel
        </button>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            navigate("/studentLogin");
          }}
        >
          Student
        </button>
      </div>
    </div>
  );
}

export default Home;
