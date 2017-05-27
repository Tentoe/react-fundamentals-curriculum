const React = require('react');
const PropTypes = require('prop-types');


function ForecastItem(props) {
  const day = props.day;
  const date = new Date(day.dt * 1000);

  return (
    <li className="forecast-item" key={day.dt}>
      <ul>
        <li><img className="forecast-icon" src={`/app/images/weather-icons/${day.weather[0].icon}.svg`} alt={`Icon for${day.weather[0].main}`} /></li>
        <li className="forecast-date">{date.toString()}</li>
      </ul>
    </li>
  );
}

ForecastItem.propTypes = {
  day: PropTypes.shape({}).isRequired, //details ommited
};

module.exports = ForecastItem;
