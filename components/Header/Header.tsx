import type { NextPage } from 'next';
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/Logo.svg';

const Header = () => {
  return (
    <section className="flex justify-between">
      <div className="w-32 h-16 ml-44 my-2"><Image width={100} height={50} layout="responsive" src={logo} alt="Logo" /></div>
      <div className="flex w-2/4 justify-around items-center mr-32">
        <Link href="#offers">Услуги</Link>
        <Link href="#advantage">Преимущества</Link>
        <Link href="#lineaments">О нас</Link>
        <Link href="#contacts">Контакты</Link>
      </div>
    </section>
  );
}

export default Header;

//className="text-xl text-third-main"
