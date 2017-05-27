const React = require('react');
const { Link } = require('react-router-dom');

function Header() {
  return (
    <div className="header" >
      <div className="title">Clever Title</div>

      <input
        className="header-search"
        id="search"
        placeholder="St. George, Utah"
        type="text"
        autoComplete="off"
      />
      <Link
        className="button header-search"
        to={{ pathname: '/search' }}
      >Get Weather</Link>

    </div>
  );
}
module.exports = Header;
