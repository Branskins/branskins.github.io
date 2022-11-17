import React, { Component } from 'react'
import ScrollToTop from '../../scroll-to-top'
import '../work.css'
import w1 from '../../../assets/w1.png'

export default class DesigningDashboards extends Component {
  render() {
    return (
      <div className="wrapper">
        <ScrollToTop />
        <h1 className="work-title">Classifying Legendary Pokemon</h1>
        <div>
          <span className="badge">2020</span>
          <span className="topic">Dashboard</span>
        </div>
        <p>
          The idea behind this is to build some sort of classifier of legendary Pokemon. 
          Since the most complete dataset of Pokemon doesn't tell if a Pokemon is legendary
          or not, I deciced to make a clustering program instead
        </p>
        <img className="work-picture" src={w1} alt="" />
        <p>
          Suspendisse mattis consequat purus, vitae gravida lectus. Curabitur tempus faucibus urna, eget viverra arcu auctor ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed varius turpis in risus fringilla malesuada. Nullam euismod nec nisl non tincidunt. Quisque vestibulum eros in sapien bibendum blandit at ac odio. Vivamus pharetra turpis at porta lacinia. Cras lacinia, tellus non interdum semper, dui neque posuere metus, ut mollis arcu mi at est. Suspendisse efficitur lorem nibh, in condimentum mauris commodo eget. In et lectus a velit vehicula commodo. Suspendisse congue faucibus tincidunt. Vestibulum lacus dolor, scelerisque eu tempor sed, imperdiet nec turpis. Nam vulputate maximus fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum vitae maximus est. Sed rutrum pulvinar porttitor.
        </p>
        <h2>Heading 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada.</p>
        <h3>Heading 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada.</p>
      </div>
    )
  }
}
