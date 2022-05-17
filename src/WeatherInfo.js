import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="headingContainer">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={50} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6 weather">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
