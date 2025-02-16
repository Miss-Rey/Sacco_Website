import React from "react";
import { hero1, hero2 } from "../../assets/images";

const ProductsAndServices = () => {
  const services = [
    {
      serviceTitle: "Development Loans",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa quia velit quod recusandae repellendus pariatur, omnis exercitationem similique distinctio consectetur laborum quae dolores perferendis natus? Suscipit ",
      image: hero1,
    },
    {
      serviceTitle: "Tatu loan/Sita loan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa quia velit quod recusandae repellendus pariatur, omnis exercitationem similique distinctio consectetur laborum quae dolores perferendis natus? Suscipit ",
      image: hero1,
    },
    {
      serviceTitle: "Emergency LOan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa quia velit quod recusandae repellendus pariatur, omnis exercitationem similique distinctio consectetur laborum quae dolores perferendis natus? Suscipit ",
      image: hero1,
    },
  ];
  return (
    <div className="" style={{ padding: "70px 40px" }}>
      <span style={{ margin: "20px " }}>
        <h2 className="text-xl text-green-700 font-semibold">
          Our Products & Services
        </h2>
        <div className="text-3xl font-bold">
          Save, borrow and Invest with Kimbilio Daima Sacco
        </div>
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-5">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-3 shadow-md rounded-md">
            <div className="w-full h-1/2">
              <img className="w-full h-full" src={service.image} alt="" />
            </div>
            <div className="flex flex-col gap-5 w-full h-1/2 px-5 py-5">
              <span className="text-2xl font-semibold ">
                {service.serviceTitle}
              </span>
              <span className="font-light text-sm">{service.description}</span>
              <span>
                <a
                  className="px-4 py-2 bg-green-600 rounded-lg text-white font-base hover:bg-green-100 duration-75 ease-in"
                  href=""
                >
                  Learn More
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAndServices;
