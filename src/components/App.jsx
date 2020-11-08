import React, { Component } from "react";
import Country from "./Country";
import Select from "./Select";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../assets/styles/App.scss";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: true };
    console.log("Constructor called");
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    console.log("fetchData called");
    const res = await fetch("https://covid19.mathdro.id/api/countries");
    const data = await res.json();
    this.setState({ data, loading: false });
  }

  render() {
    console.log("Render method called");
    console.log("Data logged in render", this.state);
    if (this.state.loading) {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    } else {
      const countries = this.state.data.countries;
      return (
        <div className="app">
          {countries.map((item) => {
            return <Country name={item.name} key={item.ico2} />;
          })}
        </div>
      );
    }
  }
}

export default App;
