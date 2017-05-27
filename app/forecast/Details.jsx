const React = require('react');
const PropTypes = require('prop-types');

const ForecastItem = require('./ForecastItem');


function convertTemp(kelvin) {
  return parseInt((((kelvin - 273.15) * 1.8000) + 32.00), 10);
}

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state;
  }
  render() {
    const day = this.state.day;
    const weather = day.weather[0];
    const temp = day.temp;
    return (
      <div>
        <h1 className="forecast-title">{this.props.match.params.city}</h1>
        <ForecastItem day={day} />
        <ul className="details-list">
          <li className="forecast-date">{weather.description}</li>
          <li className="forecast-date">Min Temp: {convertTemp(temp.min)} degrees</li>
          <li className="forecast-date">Max Temp: {convertTemp(temp.max)} degrees</li>
          <li className="forecast-date">humidity: {day.humidity} </li>
        </ul>

      </div>
    );
  }
}
Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ day: PropTypes.shape({}).isRequired }).isRequired,
     // details ommited because its an exercise
  }).isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired }).isRequired,
};

module.exports = Details;
