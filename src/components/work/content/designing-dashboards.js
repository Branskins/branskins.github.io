import React, { Component } from 'react'
import ScrollToTop from '../../scroll-to-top'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula, nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../work.css'
import w1 from '../../../assets/w1.png'
import w2 from '../../../assets/w2.png'

const codeString = 
`def calculate_stats(pokemon):
  pokemon_stats = pokemon['stats']
  total_stats = {}
  iv = ev = 0
  lvl = 50
  # randomness
  nature_instance = define_nature()

  for stat in pokemon_stats:
      stat_value = stat['base_stat']
      stat_name = stat['stat']['name']
      # formulas
      nature = nature_instance.multiplier(stat_name)
      if stat_name == 'hp':
        total_stats[stat_name] = hp_stat(stat_value, iv, ev, lvl)
      else:
        total_stats[stat_name] = other_stat(stat_value, iv, ev, lvl, nature)

  return total_stats`

export default class DesigningDashboards extends Component {
  render() {

    const codeString1 = "pokemon_stats = pokemon['stats']"
    return (
      <div className="wrapper">
        <ScrollToTop />
        <h1 className="work-title">Classifying Legendary Pokemon</h1>
        <div>
          <span className="work-badge">2020</span>
          <span className="work-topic">Dashboard</span>
        </div>
        <p>
          The idea behind this is to build some sort of classifier of legendary Pokemon.
          Since the most complete dataset of Pokemon doesn't tell if a Pokemon is legendary
          or not, I deciced to make a clustering program instead, especifically
          for this I chose a hierarchical clustering algorithm. At the end, I ended up
          trying to see if there is a remarkable way to spot if a normal pokemon could
          be considered legendary.
        </p>

        <p>
          To start, it's necessary to define the features to train the hierarchical
          clustering, so for this I chose the basic Pokemon stats. The process to come
          up with these stats can be as complex as you want, to put it simple you have
          to rely on formulas and randomness.
        </p>

        <p>For example, this piece of code shows a way to represent Pokemon where
          the IV and EV are 0, and the Pokemon level is 50.
        </p>

        <SyntaxHighlighter language="python" style={nord}>
          {codeString}
        </SyntaxHighlighter>

        <p>
          After creating a bunch of Pokemon (around 30k), I discarded some kind of
          special Pokemon forms. Why? When splitting the Pokemon in two groups, strong
          and weak; almost all of the Pokemon were classified only in one group.
        </p>

        <p>
          Once I trusted the data, I could run AgglomerativeClustering().fit(X) with
          the whole dataset (this takes some minutes). The results are "well" distribuited,
          compared to the first run, but not perfect to recognize a pattern :(
        </p>

        <img className="work-picture" src={w2} alt="" />

        <p>
          Now what? This is my first attempt, there are some options that I didn't try and
          at some point I have to end this experiment. There are more classifiers out there
          and I want to see how clustering methods perform (I didn't do a clustering
          performance). Keep learning, keep growing!
        </p>

      </div>
    )
  }
}
