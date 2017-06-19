import React from 'react';
import {Link, HashRouter,Switch,Route, BrowserRouter} from 'react-router-dom'

class HeaderAdmin extends React.Component {
    render () {
        return <div>
            <ul>
                <li><Link to="/admin">Главная страница админа</Link></li>
                <li><Link to="/add">Добавление записи</Link></li>
             </ul>
        </div> 
    }
}

export default HeaderAdmin;