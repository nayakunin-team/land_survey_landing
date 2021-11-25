import React from 'react';
import Image from 'next/image';
import basic from '../../../public/basic.svg';

interface Card {
    card: {
        title: string;
        description: string;
    };
}

const Item = ({ card }: Card) => {
    return (
        <div className="w-2/3 h-48 ml-32 flex items-center bg-primary-main rounded shadow-lg">
            <div className="w-28 h-28 mx-6">
                <Image src={basic} alt="basic" />
            </div>
            <div className="w-5/6 flex flex-col">
                <h4 className="w-11/12 text-2xl font-bold text-third-main">
                    {card.title}
                </h4>
                <p className="w-11/12 mt-4 text-base text-third-main">
                    {card.description}
                </p>
            </div>
        </div>
    );
};

export default Item;
