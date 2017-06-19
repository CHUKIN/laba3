import React from 'react';
import {Link, HashRouter,Switch,Route, BrowserRouter} from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'
import Cars from './Cars'

class Admin extends React.Component {
    render () {
        return <div> <HeaderAdmin/>
            <h1>Admin</h1>
             <Cars info={this.props.search} />
        </div> 
    }
}

export default Admin;