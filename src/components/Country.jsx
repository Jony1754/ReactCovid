import React, { Component } from "react";
import "../assets/styles/Country.scss";
import recoveredIMG from "../assets/recovered.png";
import infectedIMG from "../assets/infected.png";
import deadIMG from "../assets/dead.png";
import CircularProgress from "@material-ui/core/CircularProgress";

class Country extends Component {
  // name = "Colombia",
  // infected = 3000000,
  // dead = 10000,
  // recovered = 1000,

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch(
        `https://covid19.mathdro.id/api/countries/${this.props.name}`
      );
      const json = await response.json();
      const { confirmed, recovered, deaths } = json;
      if (confirmed && recovered && deaths) {
        this.setState({
          confirmed: confirmed.value,
          recovered: recovered.value,
          deaths: deaths.value,
          loading: false,
        });
      }
    } catch (err) {
      throw Error(err);
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    }
    const { recovered, deaths, confirmed } = this.state;
    return (
      <div className="country">
        <h2 className="country__name">{this.props.name}</h2>
        <div className="country__details">
          <div className="country__details-data">
            <img src={infectedIMG} alt="" className="country__details--icon" />
            <p>
              <strong>infected: </strong>
              {this.numberWithCommas(confirmed)}
            </p>
          </div>
          <div className="country__details-data">
            <img src={deadIMG} alt="" className="country__details--icon" />
            <p>
              <strong>dead: </strong>
              {this.numberWithCommas(deaths)}
            </p>
          </div>
          <div className="country__details-data">
            <img src={recoveredIMG} alt="" className="country__details--icon" />
            <p>
              <strong>recovered: </strong>
              {this.numberWithCommas(recovered)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Country;
