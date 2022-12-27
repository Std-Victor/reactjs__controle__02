import React from "react";
import { useSelector } from "react-redux";
import style from "./q3.style.module.css";

const Q3 = () => {
  const { continent_list } = useSelector((state) => state);
  return (
    <div className={style.card__container}>
      {continent_list.map((cnt) => (
        <div className={style.card} key={cnt.code}>
          <div className={style.img__container}>
            <div className={style.img}>
              <img src={cnt.avatar} alt={cnt.name} />
            </div>
          </div>
          <div className={style.card__info}>
            <div className={style.card__info__field}>
              <span className={style.card__info__title}>Name : </span>
              <span className={style.card__info__data}>{cnt.name}</span>
            </div>
            <div className={style.card__info__field}>
              <span className={style.card__info__title}>Surface : </span>
              <span className={style.card__info__data}> {cnt.Surface} </span>
            </div>
            <div className={style.card__info__field}>
              <span className={style.card__info__title}>Population : </span>
              <span className={style.card__info__data}> {cnt.population} </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Q3;
