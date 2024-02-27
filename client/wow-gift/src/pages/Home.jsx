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

  // Fetch Gifts data
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8001/gifts")
      .then((res) => {
        setGifts(res.data.data.allGifts);
        setLoading(false);
        console.log(gifts, "gifts");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  // const getGifts = async () => {
  //   const response = await fetch(`http://localhost:8001/gifts`);
  //   const data = await response.json();
  //   console.log(data.data.allGifts);

  //   setGifts(data);
  //   // console.log("Todos!!!!!!", gifts);
  // };
  // useEffect(() => {
  //   getGifts();
  // }, []);
  // console.log("gifts", gifts.data.allGifts);
  // {
  //   gifts.data.allGifts.map((gift) => {
  //     console.log(gift, "gift from map");
  //   });
  // }

  //   <div class="max-w-sm rounded overflow-hidden shadow-lg">
  //   <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  //   <div class="px-6 py-4">
  //     <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
  //     <p class="text-gray-700 text-base">
  //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
  //     </p>
  //   </div>
  //   <div class="px-6 pt-4 pb-2">
  //     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
  //     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
  //     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  //   </div>
  // </div>
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
              className="m-3 max-w-sm rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500"
            >
              {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{gift.title}</div>
                <p className="text-gray-700 text-base">{gift.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
