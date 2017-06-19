import React from 'react';
import {Link, HashRouter,Switch,Route, BrowserRouter} from 'react-router-dom'

class Header extends React.Component {
    render () {
        return <div>
            <ul>
                <li><Link to="/">Главная страница</Link></li>
                <li><Link to="/search">Поиск</Link></li>
             </ul>
        </div> 
    }
}

export default Header;