const React = require('react');
const { Link } = require('react-router-dom');

function Index() {
  return (
    <div className="container">
      <div className="content">
        <form>
          <label className="search-label" htmlFor="search">Enter a City and State</label>
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
        </form>
      </div>
    </div>
  );
}
module.exports = Index;
