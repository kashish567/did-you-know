"use client";

import React, { useEffect, useState } from "react";
import pointsData from "../../public/didyouknow.json";

const Home = () => {
  const getRandomPoints = (category: any) => {
    const categoryPoints = [...pointsData[category]]; // Copying the array
    const numberOfPoints = Math.floor(Math.random() * (7 - 5 + 1)) + 5; // Random number between 5 and 7
    const shuffledPoints = categoryPoints.sort(() => 0.5 - Math.random());
    return shuffledPoints.slice(0, numberOfPoints);
  };

  const [selectedPoints, setSelectedPoints] = useState<string[]>([]);

  useEffect(() => {
    setSelectedPoints(getRandomPoints("design")); // Change category as needed
  }, []);

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center p-6  lg:p-24 bg-[#dfe1e8]">
      <div className="bg-transparent rounded-3xl border-2 flex flex-col items-center justify-center border-black p-4 w-auto sm:max-w-[30rem] min-h-[20rem] relative sm:mt-0">
        <div className="bg-[#eb8f80] rounded-2xl p-3 px-6 sm:px-8 absolute top-0 -translate-y-6 -rotate-3 text-black">
          <h2 className="text-sm sm:text-lg md:text-xl font-semibold">
            Did You Know?
          </h2>
        </div>
        <div className="px-6 w-auto">
        <ul className="mt-4 list-disc list-inside space-y-1">
          {selectedPoints.map((point, index) => (
            <li
              key={index}
              className="flex items-start text-xs sm:text-sm text-black w-full before:content-['•'] before:text-black before:mr-2"
            >
              {point}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;