const React = require('react');
const SearchAndButton = require('../misc/SearchAndButton');

function Index() {
  return (
    <div className="container">
      <div className="content">
        <form>
          <label className="search-label" htmlFor="search">Enter a City and State</label>
          <SearchAndButton className="index-search" />
        </form>
      </div>
    </div>
  );
}
module.exports = Index;
