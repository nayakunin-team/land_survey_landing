import React from "react";

interface Card {
  card: {
    step: {
      title: string;
      description: string;
    };
    number: number;
  };
}

const Item = ({ card }: Card) => {
  return (
    <>
      <div className="flex">
        <div className="w-20 h-20 flex justify-center items-center rounded-full bg-primary-dark">
          <p className="text-5xl font-bold text-center text-primary-main">
            {card.number}
          </p>
        </div>
        <p className="ml-10 text-xl text-third-main text-opacity-60">
          {card.step.title}
        </p>
      </div>
      <div className="flex">
        <div className="w-0.5 h-32 mx-10 bg-primary-dark"></div>
        <p className="w-10/12 ml-10 text-2xl text-third-main">
          {card.step.description}
        </p>
      </div>
    </>
  );
};

export default Item;
