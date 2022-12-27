import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./q4.style.module.css";

const Q4 = () => {
  const { continent_list } = useSelector(state => state);
  const indep_year = continent_list.map(cnt => cnt.pays.filter(p => p.indepYear).map(p => p.indepYear)).flat().sort((a,b)=>a-b)
  return (
    <div className={style.year__container}>
      {indep_year.map((item,index) => <Link to={`/q4/${item}`} key={index}><button>{ item }</button></Link>)}
    </div>
  )
}

export default Q4;