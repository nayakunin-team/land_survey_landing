import type { NextPage } from 'next';
import Image from 'next/image'

interface ItemType {
  //image: string,
  item: {
    image: string,
    title: string,
    subtitle: string
  }
}

const Item = ({item}: ItemType) => {
  return (
  <div className="w-1/3 flex flex-col items-center">
    <div className="w-14 h-14 mt-16 mb-6 flex justify-center items-center bg-secondary-yellow bg-opacity-50 rounded-full">
      <div className="w-8 h-8"><Image src={item.image} alt={item.title}/></div>
    </div>
    <h4 className="w-1/3 mb-6 text-2xl text-center font-bold text-third-main">{item.title}</h4>
    <p className="w-2/3 text-base text-center text-third-main">{item.subtitle}</p>
  </div>
  );
}

export default Item;