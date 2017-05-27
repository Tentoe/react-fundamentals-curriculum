const React = require('react');
const { Link } = require('react-router-dom');
const PropTypes = require('prop-types');

function Header(props) {
  return (
    <div className={props.className}>
      <input
        id="search"
        placeholder="St. George, Utah"
        type="text"
        autoComplete="off"
      />
      <Link
        className="button"
        to={{ pathname: '/search' }}
      >Get Weather</Link>
    </div>

  );
}
Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {
  className: '',
};
module.exports = Header;
