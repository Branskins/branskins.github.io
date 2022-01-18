import React, { Component } from 'react'
import profile from '../../assets/profile.jpg'
import './land.css'

export default class Land extends Component {
  render() {
    return (
      <div className="land wrapper">
        <div className="land-container">
          <div className="land-info">
            <h1>Hi, I am Branskins, Pokémon Master</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button className="cv-button">Download Resume</button>
          </div>
        </div>
        <div className="land-picture">
          <img className="picture" src={profile} alt="Profile" />
        </div>
      </div>
    )
  }
}
