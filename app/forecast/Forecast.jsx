const React = require('react');
const api = require('../misc/openweather.api');
const queryString = require('query-string');
const PropTypes = require('prop-types');

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: null,
    };
  }
  componentDidMount() {
    const getVar = queryString.parse(this.props.location.search);
    api.fetchForecast(getVar.search).then((forecast) => {
      this.setState(() => ({ forecast }));
    });
  }
  render() {
    const forecast = this.state.forecast;

    if (!forecast) return <div>Loading</div>;
    return (
      <div>
        <h1 className="forecast-title">{forecast.city.name}</h1>
        <ul className="forecast-list" >
          {forecast.list.map((day) => {
            const date = Date(day.dt);
            return (
              <li className="forecast-item" key={day.dt}>
                <ul>
                  <li><img className="forecast-icon" src={`./app/images/weather-icons/${day.weather[0].icon}.svg`} alt={`Icon for${day.weather[0].main}`} /></li>
                  <li className="forecast-date">{date}</li>
                </ul>
              </li>
            );
          },
        )}
        </ul>
      </div>
    );
  }
}

Forecast.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }),
};

Forecast.defaultProps = {
  location: {
    search: '',
  },
};
module.exports = Forecast;
