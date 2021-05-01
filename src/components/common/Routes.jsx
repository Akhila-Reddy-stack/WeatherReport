import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import WeatherReport from "../weather/WeatherReport";


class Routes extends PureComponent {
  constructor(props) {
    super(props);
  this.state = {

  }
}

  render() {
    console.log(this.props)
    return (
      <Switch>
       <Route path="/" exact component={WeatherReport} /> 
       <Route path="/weatherReport" exact component={WeatherReport} /> 
       
      </Switch>
    );
  }
}

export default Routes;
