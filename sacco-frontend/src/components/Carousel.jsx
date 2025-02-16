import React from "react";
import { Button, Carousel, Rate, Tag } from "antd";
import {
  ArrowRightOutlined,
  BulbOutlined,
  GlobalOutlined,
  LeftOutlined,
  RightOutlined,
  TrophyOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { hero1, hero2 } from "../../assets/images";

const CarouselComponent = () => {
  const mainContent = [
    {
      image: hero2,
      subTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error eaque accusantium expedita, odit tempore quia placeat sed accusamus sit?",
      title: "Empowering out memebers finacially",
    },
    {
      image: hero1,
      subTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere error eaque accusantium expedita, odit tempore quia placeat sed accusamus sit?",
      title: "Offering financail freedom to our customers",
    },
  ];
  return (
    <div className="h-fit w-full">
      <Carousel autoplay className="">
        {mainContent.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start h-screen relative bg-black opacity-90"
          >
            {/* Background Image (keeps it in the background) */}
            <img
              src={item.image}
              className="w-full h-full object-cover object-center absolute top-0 left-0 -z-10"
            />

            {/* Text Content */}
            <div className="w-full flex px-20">
              <div className="w-1/2 h-full text-white flex flex-col justify-center items-center px-20 absolute top-0 left-0 z-10">
                <h1 className="md:text-4xl text-2xl font-semibold">
                  {item.title}
                </h1>
                <p className="lg:text-xl text-lg">{item.subTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
