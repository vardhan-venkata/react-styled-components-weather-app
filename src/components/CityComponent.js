import styled from "styled-components";
import React from "react";
import PerfectDay from "../assets/icons/perfect-day.svg";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
  // &:hover .search_button_name {
  //   background-color: lightblue;
  // }
`;
const ChooseCityLabel = styled.span`
  color: white;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const CityComponent = (props) => {
  const { updateCity, getWeather } = props;
  console.log("cityCompoenent");
  return (
    <>
      <WelcomeWeatherLogo src={PerfectDay} />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button
          type={"submit"}
          className="search_button_name"
          onClick={getWeather}
        >
          Search
        </button>
      </SearchBox>
    </>
  );
};
export default CityComponent;
