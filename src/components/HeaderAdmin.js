import React from 'react';
import {Link, HashRouter,Switch,Route, BrowserRouter} from 'react-router-dom'
import {Navbar,Nav,NavItem,NavDropdown, MenuItem} from 'react-bootstrap/lib/';

class HeaderAdmin extends React.Component {
    render () {
        return <div>
              <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/admin">Главная страница админа</Link>
      </Navbar.Brand>
           <Navbar.Brand>
        <Link to="/add">Добавление новой машины</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>

        </div> 
    }
}

export default HeaderAdmin;