import React, { Component } from "react";
import "../assets/styles/Search.scss";

export class Search extends Component {
  state = {
    query: "",
  };

  handleChange = (query) => {
    this.setState({ query: query.target.value });
    // console.log(query.target.value);
    if (this.props.changeText) {
      this.props.changeText(query);
    }
  };

  render() {
    const { query } = this.state;
    return (
      <section className="main">
        <h2 className="main__title">Buscar</h2>
        <div className="input__container">
          <input
            type="text"
            className="input"
            placeholder="Nombre del pais"
            onChange={this.handleChange}
            value={this.state.query}
          />
        </div>
      </section>
    );
  }
}

export default Search;
