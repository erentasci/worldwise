import React from "react";
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({ isLoading, cities }) {
  if (isLoading) {
    return <Spinner />;
  }

  if(!cities.length) return <Message message="Add your first city by clicking on a city on the map." />

  const countries = cities.reduce((arr,city) => {
    if(!arr.map((el) => el.country).includes(city.country)){
      return [...arr, {country: city.country, emoji: city.emoji}]
    } else {
      return arr
    }
  },[])

  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
