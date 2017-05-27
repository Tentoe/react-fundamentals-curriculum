const React = require('react');

const SearchAndButton = require('./misc/SearchAndButton');


function Header() {
  return (
    <div className="header" >
      <div className="title">Clever Title</div>
      <SearchAndButton className="header-search" />
    </div>
  );
}
module.exports = Header;
