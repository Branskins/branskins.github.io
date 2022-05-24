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
            <h2><Link to='/work/designingdashboards'>Designing Dashboards</Link></h2>
            <div>
              <span className="badge">2020</span>
              <span className="topic">Dashboard</span>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        {/* First container */}
        <div className="feature-container">
          <img className="feature-picture" src={t2} alt="" />
          <div className="feature-content">
            <h2><Link to='/work/vibrantportraits'>Vibrant Portraits of 2020</Link></h2>
            <div>
              <span className="badge">2018</span>
              <span className="topic">Illustration</span>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        {/* Second container */}
        <div className="feature-container">
          <img className="feature-picture" src={t3} alt="" />
          <div className="feature-content">
            <h2><Link to='/work/daysmalayalam'>36 Days of Malayalam type</Link>
            </h2>
            <div>
              <span className="badge">2020</span>
              <span className="topic">Typography</span>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        {/* Third container */}
      </div>
    )
  }
}
