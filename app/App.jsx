const React = require('react');
const { BrowserRouter, Route, Switch } = require('react-router-dom');

const Index = require('./index/Index');
const Header = require('./Header');

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />

          <Route render={() => (<p>Not Found!</p>)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
module.exports = App;
