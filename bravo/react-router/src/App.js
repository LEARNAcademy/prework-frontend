import React from 'react'
import GroceryInput from './components/GroceryInput'
import FriendInput from './components/FriendInput'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/grocery">Grocery List</Link>
          </li>
          <li>
            <Link to="/friend">Friend List</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/home" exact component={ Home } />
        <Route path="/grocery" component={ GroceryInput } />
        <Route path="/friend" component={ FriendInput } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  )
}

export default App
