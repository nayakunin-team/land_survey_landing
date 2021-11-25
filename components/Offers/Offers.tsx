import React from 'react';
import Item from './components/Item';
import CARDS from '../../public/offersTexts';

const Offers = () => {
    return (
        <section id="offers" className="mb-16">
            <h3 className="w-1/3 mx-auto mb-20 text-4xl text-center font-bold text-third-main">
                Наши услуги
            </h3>
            <div className="grid gap-y-10 grid-cols-2">
                {CARDS.map((card, i) => {
                    return <Item card={card} key={i} />;
                })}
            </div>
        </section>
    );
};

export default Offers;
