import type { NextPage } from 'next';
import Image from 'next/image'
import clock from '../../../public/clock.svg';

const Item = () => {
  return (
    <div className="w-1/4 flex flex-col items-center bg-primary-dark rounded-2xl">
      <div className="w-20 h-20 my-6 flex justify-center items-center"><Image src={clock} width={80} height={80} alt="icon"/></div>
      <h4 className="text-third-main">Опытность</h4>
      <p className="m-4 text-third-main">Современное оборудование фирмы Leica(производство Швейцария). Не старше 2 лет. Позволяет измерять Ваш участок с точностью до 1 см!</p>
    </div>
  );
}

export default Item;