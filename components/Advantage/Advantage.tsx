import React from 'react';
import Image from 'next/image';
import Item from './components/Item';
import next from '../../public/next.svg';
import back from '../../public/back.svg';

const Advantage = () => {
    return (
        <section id="advantage" className="py-16 mx-auto bg-primary-main">
            <h3 className="w-1/3 mx-auto mb-32 text-4xl text-center font-bold text-third-main">
                Наши преимущества
            </h3>
            <div className="flex justify-around items-center">
                <button className="w-32 h-32">
                    <Image src={back} layout="responsive" alt="Назад" />
                </button>
                <div className="w-2/3 flex justify-around">
                    <Item />
                    <Item />
                    <Item />
                </div>
                <button className="w-32 h-32">
                    <Image src={next} layout="responsive" alt="Вперед" />
                </button>
            </div>
        </section>
    );
};

export default Advantage;
