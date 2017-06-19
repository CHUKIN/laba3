import React from 'react';
import {Link, HashRouter,Switch,Route, BrowserRouter} from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'

class AddCar extends React.Component {
    render () {
        return <div> <HeaderAdmin/>
            <h1>Добавление</h1>
            Дбавление
        </div> 
    }
}

export default AddCar;