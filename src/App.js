import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/item0">Item0</Link></li>
        <li><Link to="/item1">Item1</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/item0" component={Item0}/>
      <Route path="/item1" component={Item1}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Item0 = () => (
  <div>
    <h2>Item0</h2>
  </div>
)

const Item1 = () => (
  <div>
    <h2>Item1</h2>
  </div>
)

export default BasicExample