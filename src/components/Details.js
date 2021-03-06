import React from "react";
import axios from "axios";
import NavBar from "./NavBar";

import { Link } from "react-router-dom";

class Details extends React.Component {
  state = {
    name: "",
    img: "",
    id: "",
    height: "",
    weight: "",
    powerStats: {},
    appearance: {},
    biography: {},
    work: {},
    connections: {},
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://akabab.github.io/superhero-api/api/id/${this.props.match.params.HeroId}.json`
      );

      this.setState({
        name: response.data.name,
        img: response.data.images.md,
        id: response.data.id,
        height: response.data.appearance.height[1],
        weight: response.data.appearance.weight[1],
        powerStats: response.data.powerstats,
        appearance: response.data.appearance,
        biography: response.data.biography,
        work: response.data.work,
        connections: response.data.connections,
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className='bg-dark'>
        <NavBar />
        <div className='cardDetais rounded mx-auto'>
          <div className='card m-1 boxImgDetails'>
            <img
              src={this.state.img}
              className='card-img-top rounded'
              alt={this.state.id}
            />
            <div className='card-body d-flex justify-content-between'>
              <h5 className='card-title'>{this.state.name}</h5>
              <Link
                to='/listheroes'
                className='card-link'
                style={{ textDecoration: "none" }}
              >
                <i class='fas fa-arrow-left'>Back</i>
              </Link>
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <b>Combat:</b> {this.state.powerStats.combat}
              </li>
              <li className='list-group-item'>
                <b>Durability:</b> {this.state.powerStats.durability}
              </li>
              <li className='list-group-item'>
                <b>Intelligence:</b> {this.state.powerStats.intelligence}
              </li>
              <li className='list-group-item'>
                <b>Power:</b> {this.state.powerStats.power}
              </li>
              <li className='list-group-item'>
                <b>Speed:</b> {this.state.powerStats.speed}
              </li>
              <li className='list-group-item'>
                <b>Strength:</b> {this.state.powerStats.strength}
              </li>
            </ul>
          </div>

          {/* details */}
          {/* Appearance */}
          <div className='mx-5 row row-cols-1'>
            <div
              className='card text-white bg-danger mb-3 col'
              style={{ maxWidth: "35rem" }}
            >
              <h1>Appearance</h1>
              <div className='card-body'>
                <p>
                  <b>Gender:</b> {this.state.appearance.gender}{" "}
                </p>
                <p>
                  <b>Race:</b> {this.state.appearance.race}
                </p>
                <p>
                  <b>Height:</b> {this.state.height}
                </p>
                <p>
                  <b>Weight:</b> {this.state.weight}
                </p>
                <p>
                  <b>Eye Color:</b> {this.state.appearance.eyeColor}
                </p>
                <p>
                  <b>Hair Color:</b> {this.state.appearance.hairColor}
                </p>
              </div>
            </div>
            {/* Biography */}
            <div
              className='card text-white bg-primary mb-3 col'
              style={{ maxWidth: "35rem" }}
            >
              <h1>Biography</h1>
              <div className='card-body'>
                <p>
                  <b>Full Name:</b> {this.state.biography.fullName}{" "}
                </p>
                <p>
                  <b>Alter Egos:</b> {this.state.biography.alterEgos}
                </p>
                <p>
                  <b>Aliases:</b> {this.state.biography.aliases}
                </p>
                <p>
                  <b>Place Of Birth:</b> {this.state.biography.placeOfBirth}
                </p>
                <p>
                  <b>First Appearance:</b>
                  {this.state.biography.firstAppearance}
                </p>
                <p>
                  <b>Publisher:</b> {this.state.biography.publisher}
                </p>
              </div>
            </div>
            {/* occupation */}
            <div
              className='card text-white bg-success mb-3 col'
              style={{ maxWidth: "35rem" }}
            >
              <h1>Work</h1>
              <div className='card-body'>
                <p>
                  <b>Occupation:</b> {this.state.work.occupation}{" "}
                </p>
                <p>
                  <b>Base:</b> {this.state.work.base}
                </p>
              </div>
            </div>
            {/* connections */}
            <div
              className='card text-white bg-info mb-3 col'
              style={{ maxWidth: "35rem" }}
            >
              <h1>Connections</h1>
              <div className='card-body'>
                <p>
                  <b>Group Affiliation:</b>{" "}
                  {this.state.connections.groupAffiliation}
                </p>
                <p>
                  <b>Relatives:</b> {this.state.connections.relatives}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
