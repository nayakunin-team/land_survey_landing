import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";

const Footer = () => {
  return (
    <section className="py-10 flex bg-third-main">
      <div className="w-1/3 ml-20 flex items-center">
        <Image src={logo} alt="logo" />
        <p className="ml-6 text-3xl text-primary-dark">
          Центральное
          <br />
          Агенство
          <br />
          Землеустройства
        </p>
      </div>
      <div className="w-1/4 ml-10 flex flex-col items-center">
        <p className="w-2/3 mt-2 mb-4 text-xl text-primary-dark">Наши услуги</p>
        <p className="w-2/3 mb-4 text-xl text-primary-dark">Преимущества</p>
        <p className="w-2/3 mb-4 text-xl text-primary-dark">О нас</p>
        <p className="w-2/3 mb-2 text-xl text-primary-dark">Контакты</p>
      </div>
      <div className="w-1/4 ml-10">
        <p className="text-primary-dark">
          ул. Связи, д. 11, офис 1<br />
          ул. Татарская, д. 21 БЦ Флагман, офис 104
          <br />
          +7(tttt) tt-tt-tt, caz_rzn@mail.ru
        </p>
        {/* <Image /> */}
        {/* <Image /> */}
        {/* <Image /> */}
      </div>
    </section>
  );
};

export default Footer;
