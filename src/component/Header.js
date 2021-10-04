import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Errors from './Errors'
import Home from './Home'
import Search from './Search'
import User from './User'

const Header = () => {
    return (
        <div className="header">
            <Router>
                <NavLink activeClassName="active_link" to="/">Home</NavLink>
                <NavLink activeClassName="active_link" to="/about">About</NavLink>
                <NavLink activeClassName="active_link" to="/search">Search</NavLink>
                <NavLink activeClassName="active_link" to="/user/Abhishek/Rai">User</NavLink>
                <NavLink activeClassName="active_link" to="/contact">Contact</NavLink>

                <Route exact path="/" component={Home} />
                <Route  path="/about" component={About} />
                <Route exact path="/search" component={Search} />
                <Route  path="/user/:fname/:lname" component={User} />
                <Route path="/contact" component={Contact} />
                {/* <Route component={Errors} /> */}
            </Router>
        </div>
    )
}

export default Header
