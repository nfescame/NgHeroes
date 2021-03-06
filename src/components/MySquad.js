/* eslint-disable no-lone-blocks */
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import imgTrash from "../assets/img/trash-fill.svg";
import imgEdit from "../assets/img/edit.svg";

import { Link } from "react-router-dom";
class MySquad extends React.Component {
  state = {
    all: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/NGHeroes"
      );

      this.setState({ all: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  delete = (event) => {
    axios
      .delete(`https://ironrest.herokuapp.com/NGHeroes/${event.target.name}`)
      .then((response) => {
        this.componentDidMount();
        // this.props.history.push("/mysquad");
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div className='bg-dark'>
        <span id='topo'></span>
        <NavBar />
        <div>
          <a href='#topo' className='btn btn-outline-danger fixed-bottom'>
            Voltar ao topo
          </a>
          {this.state.all.map((card) => {
            return (
              <div className='d-flex mb-5 mx-1'>
                <div className='card cardSquad'>
                  <div className='card-body'>
                    <div className='d-flex justify-content-between'>
                      <div className='d-flex align-middle'>
                        <div className='mx-3'>
                          <img
                            onClick={this.delete}
                            name={card._id}
                            src={imgTrash}
                            alt='description'
                            style={{ width: "2rem" }}
                          />
                        </div>

                        <Link className='mx-3' to={`/listheroes/${card._id}`}>
                          <img
                            onClick={this.edit}
                            name={card._id}
                            src={imgEdit}
                            alt='description'
                            style={{ width: "2rem" }}
                          />
                        </Link>
                      </div>
                    </div>
                    <h3 className='card-title'>
                      <b>Squad:</b> {card.squadName}
                    </h3>
                    <p className='card-text'>
                      <b>Creator by:</b> {card.playerName}
                    </p>
                  </div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <b>Combat:</b> {card.combat / 5}
                    </li>
                    <li className='list-group-item'>
                      <b>Durability:</b> {card.durability / 5}
                    </li>
                    <li className='list-group-item'>
                      <b>Intelligence:</b> {card.intelligence / 5}
                    </li>
                    <li className='list-group-item'>
                      <b>Power:</b> {card.power / 5}
                    </li>
                    <li className='list-group-item'>
                      <b>Speed:</b> {card.speed / 5}
                    </li>
                    <li className='list-group-item'>
                      <b>Strength:</b> {card.strength / 5}
                    </li>
                  </ul>
                </div>
                <div className='imgSquad'>
                  {card.allFavImg.map((elem) => {
                    return (
                      <div>
                        <img
                          className='rounded imgUnSquad'
                          src={elem.img}
                          alt='description'
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MySquad;
