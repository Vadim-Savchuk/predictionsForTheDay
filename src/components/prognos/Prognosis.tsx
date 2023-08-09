import {FC, useEffect, useState } from 'react';

import getRandomInt from '../../functions/getRandimInt';
import getDate      from '../../functions/getDate';

import style from './Prognosis.module.scss';

import prognosisList from '../../data/data';

const Prognosis: FC = () => {
    const [number, setNumber]       = useState(0);
    const [isVisibel, setIsVisibel] = useState('button');

    const prognosisHandler = () => {
        setIsVisibel('number');

        const interval = setInterval(() => {
            setNumber(getRandomInt(0, prognosisList.length -1));
        }, 30);

        setTimeout(() => {
            clearInterval(interval);
            setIsVisibel('text');
        }, 3000);
    };

    useEffect(() => {
        if (isVisibel === 'text') {
            window.localStorage.setItem('date', getDate());
            window.localStorage.setItem('number', JSON.stringify(number));
        }
    }, [isVisibel, number]);

    useEffect(() => {
        const date = window.localStorage.getItem('date');

        if (date !== getDate()) return

        const numberString = window.localStorage.getItem('number')

        if (numberString !== null) {
            setIsVisibel('text');
            setNumber(JSON.parse(numberString));
        }

    }, []);

    return (
        <section className={style.prognosis}>
            {isVisibel === 'button' && <button className={style.button} onClick={prognosisHandler}>Дізнатись</button>}
            {isVisibel === 'number' && <div className={style.number}>{number}</div>}
            {isVisibel === 'text'   && <div className={style.text}>{prognosisList[number]}</div>}
        </section>
    )
}

export default Prognosis; 