import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = createAsyncThunk("continent/fetch_data", async () => {
  const {data} = await axios.get("https://fakeapi.com/continents")
  return data;
})

const initialState = {
  continent_list: [
    {
      code: "As",
      name: "Asia",
      Surface: 735690,
      avatar: "https://cdn-icons-png.flaticon.com/512/23/23470.png",
      population: 25161000,
      pays: [
        {
          name: "Afghanistan",
          population: 22720000,
          capital: "Kabul",
          indepYear: 1919,
          image: "https://cdn-icons-png.flaticon.com/512/630/630653.png",
        },
        {
          name: "United Arab Emirates",
          population: 2441000,
          capital: "Abu Dhabi",
          indepYear: 1971,
          image: "https://cdn-icons-png.flaticon.com/512/321/321268.png",
        },
      ],
    },
    {
      code: "Eu",
      name: "Europe",
      Surface: 29216,
      avatar: "https://cdn-icons-png.flaticon.com/512/5866/5866604.png",
      population: 3479200,
      pays: [
        {
          name: "Albania",
          population: 3401200,
          capital: "Tirana",
          indepYear: 1912,
          image: "https://cdn-icons-png.flaticon.com/512/630/630583.png",
        },
        {
          name: "Andorra",
          population: 78000,
          capital: "Andorra la Vella",
          indepYear: 1278,
          image: "https://cdn-icons-png.flaticon.com/512/321/321250.png",
        },
      ],
    },
    {
      code: "SA",
      name: "South America",
      Surface: 2780400,
      avatar: "https://cdn-icons-png.flaticon.com/512/1357/1357562.png",
      population: 37032000,
      pays: [
        {
          name: "Argentina",
          population: 37032000,
          capital: "Buenos Aires",
          indepYear: 1816,
          image: "https://cdn-icons-png.flaticon.com/512/321/321211.png",
        },
      ],
    },
    {
      code: "NA",
      name: "North America",
      Surface: 1089,
      avatar: "https://cdn-icons-png.flaticon.com/512/664/664655.png",
      population: 328000,
      pays: [
        {
          name: "Anguilla",
          population: 8000,
          capital: "The Valley",
          image: "https://cdn-icons-png.flaticon.com/512/330/330660.png",
        },
        {
          name: "Aruba",
          population: 103000,
          capital: "Oranjestad",
          image: "https://cdn-icons-png.flaticon.com/512/330/330643.png",
        },
        {
          name: "Netherlands Antilles",
          population: 217000,
          capital: "Willemstad",
          image: "https://cdn-icons-png.flaticon.com/512/5327/5327435.png",
        },
      ],
    },
    {
      code: "Af",
      name: "Africa",
      Surface: 1246700,
      avatar: "https://cdn-icons-png.flaticon.com/512/1816/1816576.png",
      population: 12878000,
      pays: [
        {
          name: "Angola",
          population: 12878000,
          capital: "Luanda",
          indepYear: 1975,
          image: "https://cdn-icons-png.flaticon.com/512/630/630584.png",
        },
      ],
    },
  ],
  pending: false,
  error: false,
};

const continent_slice = createSlice({
  name: "continent",
  initialState,
  reducers: {
    add_country: (state, action) => {
      const { continent, ...rest } = action.payload;
      state.continent_list = state.continent_list.map((cnt) =>
        cnt.name !== continent
          ? cnt
          : {
              ...cnt,
              pays: [...cnt.pays, { ...rest, population: +rest.population }],
            }
      );
    },
    update_population: (state, action) => {
      state.continent_list = state.continent_list.map((cnt) => ({
        ...cnt,
        pays: cnt.pays.map((pay) =>
          pay.name === action.payload.country_name
            ? { ...pay, population: +action.payload.population }
            : pay
        ),
      }));
    },
  },
  extraReducers: {
    [fetchData.pending]: state => {
      state.pending  = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.continent_list = action.paysload;
      state.pending = false;
    },
    [fetchData.rejected]: state => {
      state.pending = false;
      state.error = true
    }
  },
});

export const { add_country, update_population } = continent_slice.actions;
export default continent_slice.reducer;
