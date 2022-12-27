import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_country, update_population } from "../../redux/continent.slice";
import style from "./q5.style.module.css";

const Q5 = () => {
  const { continent_list } = useSelector((state) => state);
  const continent_name = continent_list.map((cnt) => cnt.name).sort();
  const pays_name = continent_list
    .map((cnt) => cnt.pays.map((pay) => pay.name))
    .flat().sort();
  const add_dialog = useRef(null);
  const edit_dialog = useRef(null);
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const form_info = Object.fromEntries(
      Object.entries(Object.fromEntries(form_data.entries()))
        .map(([k, v]) =>
          k === "indepYear" && v.length !== 4
            ? [k, null]
            : [k, isNaN(v) ? v : +v]
        )
        .filter(([_, v]) => v !== null)
    );
    e.target.reset();
    dispatch(add_country(form_info));
    add_dialog.current.close();
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const form_info = Object.fromEntries(form_data.entries());
    e.target.reset();
    dispatch(update_population(form_info));
    edit_dialog.current.close();
  };
  return (
    <div className={style.container}>
      <div
        className={style.action}
        onClick={(e) => {
          add_dialog.current.showModal();
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4903/4903802.png"
          alt="add__icon"
        />
      </div>
      <div
        className={style.action}
        onClick={(e) => {
          edit_dialog.current.showModal();
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/9244/9244693.png"
          alt="edit__icon"
        />
      </div>
      <dialog ref={add_dialog} onClick={() => add_dialog.current.close()}>
        <form
          method="dialog"
          onSubmit={handleAdd}
          onClick={(e) => e.stopPropagation()}
        >
          <h3>Add City</h3>
          <div className={style.form__field}>
            <label htmlFor="cont">Continent : </label>
            <select name="continent" id="cont" required>
              <option value="">Choise continent...</option>
              {continent_name.map((cnt, index) => (
                <option key={index} value={cnt}>
                  {cnt}
                </option>
              ))}
            </select>
          </div>
          <div className={style.form__field}>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className={style.form__field}>
            <label htmlFor="pop">Population : </label>
            <input type="number" name="population" id="pop" required />
          </div>
          <div className={style.form__field}>
            <label htmlFor="cap">Capital : </label>
            <input type="text" name="capital" id="cap" required />
          </div>
          <div className={style.form__field}>
            <label htmlFor="year">Independence year : </label>
            <input
              type="number"
              name="indepYear"
              id="year"
              placeholder="0000"
            />
          </div>
          <div className={style.form__field}>
            <label htmlFor="img">Image : </label>
            <input
              type="text"
              name="image"
              id="img"
              pattern="^https:\/\/.*$"
              placeholder="https://..."
              required
            />
          </div>
          <div className={style.form__field}>
            <input
              type="button"
              value="cancal"
              onClick={() => add_dialog.current.close()}
            />
            <input type="submit" value="Add" />
          </div>
        </form>
      </dialog>
      <dialog ref={edit_dialog} onClick={() => edit_dialog.current.close()}>
        <form
          method="dialog"
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleUpdate}
        >
          <h3>Update the population of a country</h3>
          <div className={style.form__field}>
            <label htmlFor="pay">Name : </label>
            <select name="country_name" id="pay" required>
              <option value="">Choise country name...</option>
              {pays_name.map((pay, index) => (
                <option key={index} value={pay}>
                  {pay}
                </option>
              ))}
            </select>
          </div>
          <div className={style.form__field}>
            <label htmlFor="new_pop">New population :</label>
            <input type="number" name="population" id="new_pop" />
          </div>
          <div className={style.form__field}>
            <input
              type="button"
              value="Cancel"
              onClick={() => edit_dialog.current.close()}
            />
            <input type="submit" value="Update" />
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Q5;
