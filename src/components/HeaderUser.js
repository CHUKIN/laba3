import React from 'react';
import {Link, HashRouter,Switch,Route, BrowserRouter} from 'react-router-dom'
import {Navbar,Nav,NavItem,NavDropdown, MenuItem} from 'react-bootstrap/lib/';

class HeaderUser extends React.Component {
    render () {
        return <div>
                 <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                      <Navbar.Brand>
                        <Link to="/">Главная страница</Link>
                      </Navbar.Brand>
                          <Navbar.Brand>
                        <Link to="/search">Поиск</Link>
                      </Navbar.Brand>
                      <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
        </div> 
    }
}

export default HeaderUser;