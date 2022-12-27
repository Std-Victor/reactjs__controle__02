import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./q6.style.module.css";

const Q6 = () => {
  const { continent_list } = useSelector((state) => state);
  const [country, setCountry] = useState(
    continent_list.map((cnt) => cnt.pays).flat()
  );
  const population_list = continent_list
    .map((cnt) => cnt.pays.map((pay) => +pay.population))
    .flat()
    .sort((a, b) => a - b);
  const continent_name = continent_list.map((cnt) => cnt.name).sort();
  const handleFilterByContinent = (e) =>
    setCountry(
      continent_list
        .filter((cnt) => cnt.name === e.target.value)
        .map((cnt) => cnt.pays)
        .flat()
    );
  const handleFilterByPopulation = (e) =>
    setCountry(
      continent_list
        .map((cnt) =>
          cnt.pays.filter((pay) => pay.population === +e.target.value)
        )
        .flat()
    );

  return (
    <div>
      <div className={style.filter__head}>
        <div className={style.filter__field}>
          <input
            type="text"
            list="pop_list"
            placeholder="Filtrer par population"
            onChange={handleFilterByPopulation}
          />
          <datalist id="pop_list">
            {population_list.map((pop, index) => (
              <option key={index} value={pop} />
            ))}
          </datalist>
        </div>
        <div className={style.filter__field}>
          <input
            type="text"
            list="continent_list"
            placeholder="Filtrer par continent"
            onChange={handleFilterByContinent}
          />
          <datalist id="continent_list">
            {continent_name.map((cnt, index) => (
              <option key={index} value={cnt} />
            ))}
          </datalist>
        </div>
      </div>
      <div className={style.display__filter}>
        {country.map((pay, index) => (
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
                <span className={style.card__info__data}>
                  {" "}
                  {pay.population}{" "}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Q6;
