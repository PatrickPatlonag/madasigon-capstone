import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Repairs({ features, calculateDistance, handleSelectLocation }) {
  const getShops = () => {
    return features
      .map((item) => ({
        ...item,
        distance:
          calculateDistance({
            latitude: item.latitude,
            longitude: item.longitude,
          }) / 1000,
      }))
      .sort((a, b) => a.distance - b.distance);
  };

  console.log("shops: ", getShops());

  return (
    <div>
      {features &&
        getShops().map((item) => (
          <div className="border-b py-2 px-2 flex h-40">
            <div className="h-full w-32 overflow-hidden bg-black rounded-md">
              <img
                className="w-full h-full object-contain"
                src={item.image}
                alt=""
              />
            </div>
            <div className="relative flex-1 pl-4">
              <h1 className="font-bold">{item.title}</h1>
              <p className="text-sm text-gray-600">{item.address}</p>
              <p className="text-sm text-gray-600">
                {item.open} - {item.close}
              </p>
              <p className="text-sm text-gray-600">{item.phone}</p>
              <p>{item.distance} km away</p>
              <button
                className="bg-primary absolute bottom-2 right-2 flex items-center text-white px-4 py-2 rounded-md"
                onClick={() => handleSelectLocation(item)}
              >
                <LocationMarkerIcon className="h-5 w-5 text-white mr-1" />
                Location
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Repairs;
