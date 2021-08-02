import React from 'react';
import s from './Card.module.css';

export default function Card({onClose, name, min, max, img, id}) {
  return <div> 
            <div className={s.card}>
              <div className={s.cardHeader}>
                  <button  onClick={onClose} className={s.btn}> X </button>
              </div>
              <div className={s.cardBody}>
                  <h4 className={s.txt}>{name}</h4>
                  <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="clima" />
              </div>
              <div className={s.cardFooter}>
                  <p className={s.txt}>Min: <span>{min}</span></p>
                  <p className={s.txt}>Max: <span>{max}</span></p>
              </div>
            </div>
        </div>
};
