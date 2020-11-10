import React, { Component } from "react";
import Country from "./Country";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../assets/styles/App.scss";
import Search from "./Search";
import CardContainer from "./CardContainer";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      allData: [],
      loading: true,
      infected: 0,
      recovered: 0,
      deaths: 0,
    };
    console.log("Constructor called");
  }

  componentDidMount() {
    this.fetchData();
    this.fetchGlobal();
  }

  async fetchData() {
    console.log("fetchData called");
    const res = await fetch("https://covid19.mathdro.id/api/countries");
    const data = await res.json();
    this.setState({ data, allData: data, loading: false });
    console.log("state logged in fetch", this.state);
  }

  async fetchGlobal() {
    const res = await fetch("https://covid19.mathdro.id/api/");
    const data = await res.json();
    const { confirmed, recovered, deaths } = data;
    console.log("data from fetchglobal", confirmed, recovered, deaths);
    this.setState({
      confirmed: confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
    });
    console.log("state from global", this.state);
  }

  handleChangeText = (query) => {
    const countries = this.state.allData.countries;
    console.log(query.target.value);
    const dataFiltered = countries.filter((country) => {
      return country.name
        .toLowerCase()
        .includes(query.target.value.toLowerCase());
    });
    console.log(dataFiltered);
    // this.setState({ data: dataFiltered });
    // console.log("countries in handlechange", countries);
    // console.log(countries[1].name.toString().toLowerCase());
  };

  render() {
    console.log("Render method called");
    console.log("Data logged in render", this.state);
    if (this.state.loading) {
      return (
        <div className="app">
          <CircularProgress />
        </div>
      );
    } else {
      const countries = this.state.data.countries;
      return (
        <div className="app">
          <CardContainer
            data={[
              this.state.deaths,
              this.state.recovered,
              this.state.confirmed,
            ]}
          />
          {countries.map((item) => {
            return <Country name={item.name} key={item.iso2} />;
          })}
        </div>
      );
    }
  }
}

export default App;
