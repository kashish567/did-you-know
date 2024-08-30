"use client";

import React from "react";

const Home = () => {
  const points = [
    "Figma enables collaboration for seamless teamwork.",
    "Accessible on any operating system via the browser.",
    "Simplifies complex shape creation and editing.",
    "Automates responsive design elements arrangement.",
    "Offers interactive prototyping capabilities within the platform.",
    "Boasts a rich community and extensive plugin library.",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 bg-[#dfe1e8]">
      <div className="bg-transparent rounded-3xl border-2 flex flex-col items-center justify-center border-black p-4 w-full max-w-[90%] sm:max-w-[40rem] relative sm:mt-0">
        <div className="bg-[#eb8f80] rounded-2xl p-3 px-6 sm:px-10 mb-4 text-center absolute top-0 -translate-y-1/2 -rotate-6 text-black">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Did You Know?
          </h2>
        </div>
        <ul className="mt-14 list-disc list-inside space-y-1 mb-10">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start text-sm sm:text-lg text-black w-full before:content-['•'] before:text-black before:mr-2"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
