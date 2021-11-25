import React from 'react';
import Item from './components/Item';
import edit from '../../public/edit.svg';
import ok from '../../public/ok.svg';
import clock from '../../public/clock.svg';

const Lineaments = () => {
    return (
        <section id="lineaments" className="mb-32 flex">
            <Item
                item={{
                    image: edit,
                    title: 'Под ключ',
                    subtitle:
                        'Полное сопровождение на всех этапах работы. Мы сами сделаем запрос и получим ваши документы из ЕГРН',
                }}
            />
            <Item
                item={{
                    image: ok,
                    title: 'Качество',
                    subtitle:
                        'Мы даем гарантии верных документов и профессионализма наших работников',
                }}
            />
            <Item
                item={{
                    image: clock,
                    title: 'Быстро',
                    subtitle:
                        'Геодезисты могут выехать уже на следующий день на ваш объект',
                }}
            />
        </section>
    );
};

export default Lineaments;
