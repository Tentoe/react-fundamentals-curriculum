const React = require('react');
const { BrowserRouter, Route, Switch } = require('react-router-dom');

const Index = require('./index/Index');
const Header = require('./Header');
const Forecast = require('./forecast/Forecast');
const Details = require('./forecast/Details');

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/forecast" component={Forecast} />
          <Route path="/details/:city" component={Details} />
          <Route render={() => (<p>Not Found!</p>)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
module.exports = App;
