import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./pays.style.module.css";

const PaysDescription = () => { 
  const { continent_list } = useSelector(state => state);
  const { year } = useParams()
  const pays_indep = continent_list.map(cnt => cnt.pays.filter(pay => pay.indepYear === +year)).flat();
  return (
    <div className={style.card__container}>
      {pays_indep.map((pay, index) => (
        <div className={style.card} key={index}>
          <div className={style.img__container}>
            <div className={style.img}>
              <img src={pay.image} alt={pay.name} />
            </div>
          </div>
          <div className={style.card__info}>
            <div className={style.card__info__field}>
              <span className={style.card__info__title}>Name : </span>
              <span className={style.card__info__data}>{pay.name}</span>
            </div>
            <div className={style.card__info__field}>
              <span className={style.card__info__title}>Capital : </span>
              <span className={style.card__info__data}> {pay.capital} </span>
            </div>
            <div className={style.card__info__field}>
              <span className={style.card__info__title}>Population : </span>
              <span className={style.card__info__data}> {pay.population} </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
  
}

export default PaysDescription;