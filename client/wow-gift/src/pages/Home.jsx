/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

function Home() {
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedDescriptionIndex, setExpandedDescriptionIndex] =
    useState(null);
  // Function to slice text to a specified length
  const sliceText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  // Fetch Gifts data
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8001/gifts")
      .then((res) => {
        const formattedGifts = res.data.data.allGifts.map((gift) => ({
          ...gift,
          description: sliceText(gift.description, 100), // Adjust the maxLength as needed
        }));
        setGifts(formattedGifts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Function to toggle expanded description
  const toggleExpandedDescription = (index) => {
    setExpandedDescriptionIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };
  // // Fetch Gifts data
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("http://localhost:8001/gifts")
  //     .then((res) => {
  //       setGifts(res.data.data.allGifts);
  //       setLoading(false);
  //       console.log(gifts, "gifts");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Gifts</h1>
        <Link to="/books/create"></Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap content-center">
          {gifts.map((gift, index) => (
            <div
              key={index}
              className="m-3 max-w-sm rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-100"
            >
              {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{gift.title}</div>
                <p className="text-gray-700 text-base">
                  {expandedDescriptionIndex === index
                    ? gift.description
                    : sliceText(gift.description, 100)}
                  <button
                    className="text-blue-500 hover:underline focus:outline-none"
                    onClick={() => toggleExpandedDescription(index)}
                  >
                    {expandedDescriptionIndex === index
                      ? "Read Less"
                      : "Read More"}
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
