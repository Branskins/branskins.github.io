import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './work.css'
import w1 from '../../assets/w1.png'

export default class FeatureWork extends Component {
  render() {
    return (
      <div className="wrapper">
        <h4>Featured works</h4>
        <div className="feature-container">
          <div className="feature-picture-card"><img className="feature-picture" src={w1} alt="" /></div>
          <div className="feature-content">
            <h2><Link to='/work/designingdashboards'>Classifying Legendary Pokemon</Link></h2>
            <div>
              <span className="badge">2022</span>
              <span className="topic">Clustering</span>
            </div>
            <p>What does it make a Pokemon legendary? Pokemon have stats that can used to determined if a Pokemon is strong enough to be considered Legendary.</p>
          </div>
        </div>
        {/* First container */}
      </div>
    )
  }
}
