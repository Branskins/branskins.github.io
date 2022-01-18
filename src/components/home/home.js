import React, { Component } from 'react'
import './home.css'
import Land from '../land/land'
import RecentBlog from '../blog/recent-blog'
import FeaturedWork from '../work/featured-work'


export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Land />
        <RecentBlog />
        <FeaturedWork />
      </div>
    )
  }
}