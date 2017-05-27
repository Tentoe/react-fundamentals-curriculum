const React = require('react');
const queryString = require('query-string');
const PropTypes = require('prop-types');
const { Link } = require('react-router-dom');

const api = require('../misc/openweather.api');
const ForecastItem = require('./ForecastItem');

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
          {forecast.list.map(day => (
            <Link key={day.dt} to={{ pathname: `/details/${forecast.city.name}`, state: { day } }}>
              <ForecastItem day={day} />
            </Link>
            ),
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
