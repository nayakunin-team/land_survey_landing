import React from 'react';
import Item from './components/Item';
import STEPS from '../../public/stepsTexts';

const Steps = () => {
    return (
        <section className="mb-32">
            <h3 className="w-2/3 ml-40 my-20 text-4xl font-bold text-third-main">
                Этапы предоставления услуги
            </h3>
            <div className="w-2/3 ml-40">
                {STEPS.map((step, i) => {
                    return (
                        <Item card={{ step: step, number: i + 1 }} key={i} />
                    );
                })}
            </div>
        </section>
    );
};

export default Steps;
