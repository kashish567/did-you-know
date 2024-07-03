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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#dbd9e3]">
      <div className="bg-transparent rounded-3xl border-2 flex flex-col items-center justify-center border-black p-4 w-full max-w-[40rem] relative">
        <div className="bg-[#fe8777] rounded-2xl p-3 px-10 mb-4 text-center absolute top-0 -translate-y-1/2 -rotate-6 text-black">
          <h2 className="text-2xl font-semibold">Did You Know?</h2>
        </div>
        <ul className="mt-14 list-disc list-inside space-y-2 mb-10">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start text-lg text-black w-full before:content-['•'] before:text-black before:mr-2"
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
