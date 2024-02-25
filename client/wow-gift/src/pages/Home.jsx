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
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Gifts</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {gifts.map((gift, index) => (
            <div key={index} className="bg-gray-300 h-5">
              <div className="card">
                <h3>{gift.title}</h3>
                <h3>{gift.description}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
