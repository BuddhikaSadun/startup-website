import React from "react";

export default function Hero({ hero }) {
  return (
    <div className="p-40 border rounded-xl shadow-md bg-white m-5">
      <h1 className="text-3xl font-bold mb-4">{hero.headline}</h1>
      <p className="text-gray-600">{hero.subText}</p>

      <div className="flex gap-4">
        {hero.callToActions.map((data, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            {data}
          </button>
        ))}
      </div>
    </div>
  );
}
