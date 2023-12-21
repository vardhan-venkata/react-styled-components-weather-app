import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherInfoComponent";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 20px 10px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 30px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background-image: radial-gradient(
      circle at 85% 1%,
      hsla(190, 0%, 93%, 0.05) 0%,
      hsla(190, 0%, 93%, 0.05) 96%,
      transparent 96%,
      transparent 100%
    ),
    radial-gradient(
      circle at 14% 15%,
      hsla(190, 0%, 93%, 0.05) 0%,
      hsla(190, 0%, 93%, 0.05) 1%,
      transparent 1%,
      transparent 100%
    ),
    radial-gradient(
      circle at 60% 90%,
      hsla(190, 0%, 93%, 0.05) 0%,
      hsla(190, 0%, 93%, 0.05) 20%,
      transparent 20%,
      transparent 100%
    ),
    radial-gradient(
      circle at 79% 7%,
      hsla(190, 0%, 93%, 0.05) 0%,
      hsla(190, 0%, 93%, 0.05) 78%,
      transparent 78%,
      transparent 100%
    ),
    radial-gradient(
      circle at 55% 65%,
      hsla(190, 0%, 93%, 0.05) 0%,
      hsla(190, 0%, 93%, 0.05) 52%,
      transparent 52%,
      transparent 100%
    ),
    linear-gradient(135deg, rgb(37, 56, 222), rgb(96, 189, 244));
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: white;
  margin: 20px auto;
  font-size: 26px;
  font-weight: bold;
`;
function App() {
  const [city, updateCity] = useState();
  const [weather, setWeather] = useState();
  const [isNetworkError, setIsNetworkError] = useState(false);
  const getWeather = async (e) => {
    console.log("function api ");
    e.preventDefault();
    const apiResponse = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=apiKey`
      )
      .then(function (response) {
        setWeather(response.data);
        setIsNetworkError(false);
      })
      .catch(function (error) {
        console.log("error", error);
        setWeather(["weather data not avaialble"]);
        setIsNetworkError(true);
      });
    console.log(apiResponse);
  };
  return (
    <CardContainer>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent
          weather={weather}
          city={city}
          isNetworkError={isNetworkError}
        />
      ) : (
        <CityComponent updateCity={updateCity} getWeather={getWeather} />
      )}
    </CardContainer>
  );
}

export default App;
