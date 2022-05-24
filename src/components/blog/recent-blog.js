import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './recent-blog.css'

export default class RecentPost extends Component {
  render() {
    return (
      <div className="recent-blog">
        <div className="wrapper">
          <div className="header-blog">
            <h4>Recent posts</h4>
            <Link to="/blog">View all</Link>
          </div>
          <div className="card-container">
            <div className="card">
              <p className="card-title">Making a design system from scratch</p>
              <div className="card-info">
                <span>12 Feb 2020</span>
                <span>Design, Pattern</span>
              </div>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="card">
              <p className="card-title">Making a design system from scratch</p>
              <div className="card-info">
                <span>12 Feb 2020</span>
                <span>Figma, Icon Design</span>
              </div>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
