import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Logo.svg";

const Header = () => {
  return (
    <section className="flex justify-between">
      <div className="w-32 h-16 ml-44 my-2">
        <Image
          width={100}
          height={50}
          layout="responsive"
          src={logo}
          alt="Logo"
        />
      </div>
      <div className="flex w-2/4 justify-around items-center mr-32">
        <Link href="#offers" passHref>
          <button className="text-xl text-third-main">Услуги</button>
        </Link>
        <Link href="#advantage" passHref>
          <button className="text-xl text-third-main">Преимущества</button>
        </Link>
        <Link href="#lineaments" passHref>
          <button className="text-xl text-third-main">О нас</button>
        </Link>
        <Link href="#contacts" passHref>
          <button className="text-xl text-third-main">Контакты</button>
        </Link>
      </div>
    </section>
  );
};

export default Header;
