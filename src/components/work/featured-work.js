import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './work.css'
import t1 from '../../assets/t1.png'
import t2 from '../../assets/t2.png'
import t3 from '../../assets/t3.png'

export default class FeatureWork extends Component {
  render() {
    return (
      <div className="wrapper">
        <h4>Featured works</h4>
        <div className="feature-container">
          <img className="feature-picture" src={t1} alt="" />
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
