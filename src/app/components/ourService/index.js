"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurService() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleButtonClick = (index) => {
    console.log(index);
    setSelectedItem((prevSelected) => (prevSelected === index ? null : index));
  };

  const ourServiceData = [
    {
      title: "Event 1",
      subTitle: "Event company 1",
      descriptionTitle: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "",
    },
    {
      title: "Event 2",
      subTitle: "Event company 2",
      descriptionTitle: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "",
    },
    {
      title: "Event 3",
      subTitle: "Event company 3",
      descriptionTitle: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "",
    },
    {
      title: "Event 4",
      subTitle: "Event company 4",
      descriptionTitle: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      image: "",
    },
  ];

  return (
    <>
      {/* <div className="w-full h-[1px] bg-gray-600 mb-6 px-6 sm:px-10 lg:px-40"></div> */}
      <div className="flex w-full flex-col lg:flex-row items-start h-auto gap-20 lg:gap-0 justify-center px-6 sm:px-10 lg:px-20 py-20">
        {/* tab */}
        <div className="flex flex-col justify-between h-[400px]">
          {ourServiceData.map((data, index) => {
            return (
              <button
                key={index}
                disabled={index === selectedItem}
                className="w-[300px] flex items-center"
                onClick={() => handleButtonClick(index)}
              >
                <div className="flex flex-row gap-6 items-center">
                  <motion.span
                    initial={{
                      x: selectedItem === index ? 0 : -20,
                      opacity: selectedItem === index ? 1 : 0,
                    }}
                    animate={{
                      x: selectedItem === index ? 0 : -20,
                      opacity: selectedItem === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="ml-2"
                  >
                    <FaArrowRight
                      className={`text-heading4 ${
                        selectedItem === index ? "text-purple" : "text-white"
                      }`}
                    />
                  </motion.span>
                  <div className="flex flex-col items-start">
                    <p
                      className={`text-heading4 ${
                        selectedItem === index ? "text-purple" : "text-white"
                      }`}
                    >
                      {data.title}
                    </p>
                    <p className="text-gray-500">{data.subTitle}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        {/* descriptions */}
        <div className="w-full h-[500px]">
          {ourServiceData.map((data, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: selectedItem === index ? 1 : 0,
                  y: selectedItem === index ? 0 : 80,
                }}
                transition={{ duration: 0.5 }}
              >
                {index === selectedItem ? (
                  <div className="flex flex-col lg:flex-row justify-between h-full gap-10">
                    <div className="flex flex-col  w-full lg:w-[60%] h-full gap-10">
                      <p className="text-heading3 text-purple">
                        {data.descriptionTitle}
                      </p>
                      <p className="text-body text-justify">
                        {data.description}
                      </p>
                    </div>
                    <div className="h-full w-full lg:w-[40%] ">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                        }
                        width={1000}
                        height={1000}
                        alt={"service pictures"}
                        style={{
                          borderRadius: "20px",
                          objectFit: "cover",
                          width: "100%",
                          height: "400px",
                        }}
                      />
                    </div>
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
