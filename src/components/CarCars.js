import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import {Link, HashRouter,Switch,Route, BrowserRouter} from 'react-router-dom'
import './CarCars.css'
import { Router, IndexRoute, browserHistory, Redirect,  } from 'react-router'

class Cars extends React.Component {

    constructor(props){
        super(props);
        this.showCar = this.showCar.bind(this);
    }

    showCar(event){
    }

    render () {
       return  <Grid.Column  className="carCars">
          <div onClick={this.showCar}>
               <Link  to={`/car:${this.props.car.id}`}>
                    {<Image  src={this.props.car.photo} />}
                    <p>Марка: {this.props.car.mark}</p>
                    <p>Модель: {this.props.car.model}</p>
                    <p>Год: {this.props.car.year}</p>
                    <p>Цена: {this.props.car.cost}</p>
                    <p>Трансмиссия: {this.props.car.transmission}</p>
                    <p>Тип двигателя: {this.props.car.enginesType}</p>
                    <p>Пробег: {this.props.car.mileage}</p>
                    <p>Объём двигателя: {this.props.car.amount}</p>
                    <p>Просмотры: {this.props.car.watch}</p>
               </Link>
        </div>
      </Grid.Column>
    }
}

export default Cars;