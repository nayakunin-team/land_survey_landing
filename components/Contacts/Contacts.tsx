import React from 'react';
// import Image from 'next/image'

const Contacts = () => {
    return (
        <section id="contacts" className="py-16 bg-primary-main">
            <h3 className="w-1/3 ml-40 mb-10 text-4xl font-bold text-third-main">
                Контакты
            </h3>
            <div className="flex justify-between">
                <div className="ml-40 ">
                    <h4 className="w-1/3 mb-6 text-2xl text-center text-third-main">
                        ООО `ГСС`
                    </h4>
                    <p className="mb-4 text-base text-third-main">
                        Межевание, постановка на кадастровый учёт, геодезия
                    </p>
                    <p className="mb-6 text-base text-third-main">
                        Мы с удовольствием ответим на все ваши вопросы!
                    </p>
                    <div>
                        {/* <Image src={} alt="Adress"/> */}
                        <p className="mb-6 text-base text-third-main">
                            г. Рязань, ул. Связи, д. 11, офис 1<br />
                            г. Рязань, ул. Татарская, д. 21 БЦ Флагман, офис 104
                        </p>
                    </div>
                    <div>
                        {/* <Image /> */}
                        <p className="mb-6 text-base text-third-main">
                            +7(tttt) tt-tt-tt
                        </p>
                    </div>
                    <div>
                        {/* <Image /> */}
                        <p className="mb-6 text-base text-third-main">
                            caz_rzn@mail.ru
                        </p>
                    </div>
                    <div>
                        {/* <Image /> */}
                        <p className="mb-6 text-base text-third-main">
                            Время приема звонков:
                            <br />
                            Будни с 9:00 до 20:00
                            <br />
                            Выходные с 11:00 до 17:00
                            <br />
                            <br />
                            Время работы офиса:
                            <br />
                            Будни с 9:00 до 20:00
                            <br />
                            Выходные по договоренности
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="w-4/5 h-2/3 bg-third-main"></div>
                    <p className="mt-10 text-base text-third-main">
                        Напишите нам:
                    </p>
                    <div className="mt-4 flex">
                        {/* <Image /> */}
                        <p className="mr-6 text-base text-third-main">
                            WhatsApp
                        </p>
                        {/* <Image /> */}
                        <p className="mr-6 text-base text-third-main">
                            Telegram
                        </p>
                        {/* <Image /> */}
                        <p className="text-base text-third-main">Viber</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
