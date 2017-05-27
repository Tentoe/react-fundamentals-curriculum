/* eslint-env browser */
const React = require('react');
const { Link } = require('react-router-dom');
const PropTypes = require('prop-types');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState(() => ({
      searchString: value,
    }));
  }

  render() {
    return (
      <div className={this.props.className}>
        <input
          id="search"
          placeholder="St. George, Utah"
          type="text"
          autoComplete="off"
          onChange={this.handleChange}
        />
        <Link
          className="button"
          to={{ pathname: '/forecast', search: `search=${this.state.searchString}` }}
          onClick={window.location.reload}
        >Get Weather</Link>
      </div>

    );
  }
}
Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: '',
};
module.exports = Header;
