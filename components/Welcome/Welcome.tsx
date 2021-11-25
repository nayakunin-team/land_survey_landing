import React from 'react';
import Link from "next/link";
import Image from "next/image";
import geo from "../../public/Geo.png";

const Welcome = () => {
  return (
    <section className="flex flex-row pt-20 pb-8 bg-primary-main">
      <div className="flex flex-col">
        <h1 className="w-3/5 ml-40 text-7xl font-bold text-third-main">
          Центральное
          <br />
          Агенство
          <br />
          Землеустройства
        </h1>
        <h2 className="w-3/5 ml-40 mt-10 text-2xl text-third-main">
          Предоставляем все виды межевания земельных участков любой сложности в
          Рязани и Рязанской области
        </h2>
        <Link href="#contacts" passHref>
          <button className="w-60 h-16 ml-40 mt-10 bg-secondary-green rounded">
            <span className="text-2xl text-primary-light">
              Связаться с нами
            </span>
          </button>
        </Link>
      </div>
      <div className="w-1/2 h-1/2 mr-20">
        <Image src={geo} alt="Geo" />
      </div>
    </section>
  );
};

export default Welcome;
