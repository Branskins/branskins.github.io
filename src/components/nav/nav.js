import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div className="wrapper">
        <ul className="nav-container">
          <li><Link to="/">Home</Link></li>
          <li><Link to="work">Work</Link></li>
          <li><Link to="blog">Blog</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </div>
    )
  }
}
