import _ from "lodash";
import { withSnackbar } from "notistack";
import React, { Fragment, PureComponent } from "react";
import {
  Button,
  Col,
  Row,
  Container,
} from "reactstrap";
import * as Fno from 'react-icons/fa';

import { getWeatherReport ,searchString} from "../../service/weatherService";

class WeatherReport extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isTableLoading: true,
    };
    this.notificationDOMRef = React.createRef();
  }



  componentDidMount = async () => {
    await this.getWeatherReport();
  };

  getWeatherReport = async () => {
    console.log("report");
    let res = await getWeatherReport();
    console.log(res);
    await this.setState({
      weatherReport: res.data
    })
  };

  handleChange = async ({ currentTarget: Input }) => {
    const { name, value } = Input;

    let res = await searchString(value);
    console.log(";;;;;;;;;;;;;;;;;;;; res ", res)
    if (res.data.statusCode === 1) {
      await this.setState({
        searchResults: res.data.response,
        padding: parseInt(res.data.response.length) * 33.33
      })
    }
    else {
      await this.setState({
        searchResults: [],
        padding: 0
      })
      console.log("no data found")
    }
  }
  render() {
    const { weatherReport,searchResults } = this.state;
    console.log(this.state);
    return (
      <Fragment>
        <Container>
          <div className="weather" >
            <Row style={{  marginLeft: "-69px", width: "100%" }}>
              <Col md={12} sm={8} >
                <div class="wrap1">
                  <div class="search1">
                    <input type="text" class="searchTerm1"
                      field="weatherId"
                      placeholder="Search Name or Location...."
                      onChange={this.handleChange}
                      required
                      autoComplete="off"
                    />
                    <button type="submit" class="searchButton1">
                      <Fno.FaSearch />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="autocomplete-dropdown-container searchDrop1">
                    {searchResults?.map(suggestion => {
                      return (
                        <div className="searchResult1" onClick={() => this.searchEvents(suggestion.weatherId)}> 
                          <span>{suggestion?.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Col>
            </Row>
            {weatherReport?.map((element) => (
              <div class="main-content">
                <div>
                  {console.log("rr", element)}
                  <span>{element.name},{element.sys.country}</span>
                </div>
                <div>
                  <span class="time-zone">{element.timezone}</span>
                </div>
                <div>
                  <Row>
                    <Col md={6}>
                      {/* // weather report Ui */}
                    </Col>
                    <Col md={6}>
                      <div>
                        {element.clouds.all}
                      </div>
                      <div>
                        {element.weather.main}
                      </div>
                    </Col>
                  </Row>
                </div>
                <hr />
                <Row>
                  <Col md={4}>
                    <div class="weather-wrap">
                      <div>
                        {element.main.temp_max}
                      </div>
                      <div class="wrap-text">
                        High
                      </div>
                    </div>
                    <div>
                      <div>
                        {element.main.temp_min}
                      </div>
                      <div class="wrap-text">
                        Low
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div class="weather-wrap">
                      <div>
                        {element.wind.speed}
                      </div>
                      <div class="wrap-text">
                        Wind
                      </div>
                    </div>
                    <div>
                      <div>
                        {element.main.humidity}
                      </div>
                      <div class="wrap-text">
                        Rain
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div class="weather-wrap">
                      <div>
                        {element.sys.sunrise}
                      </div>
                      <div class="wrap-text">
                        Sunrise
                      </div>
                    </div>
                    <div>
                      <div>
                        {element.sys.sunset}
                      </div>
                      <div class="wrap-text">
                        Sunset
                      </div>
                    </div>
                  </Col>
                </Row>
                <hr />
              </div>
            ))}
          </div>
        </Container>
        <br />
      </Fragment>
    );
  }
}

export default withSnackbar(WeatherReport);

