import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import {Link, HashRouter,Switch,Route, BrowserRouter} from 'react-router-dom'

class Cars extends React.Component {

    constructor(props){
        super(props);
        this.lol = this.lol.bind(this);
    }

    lol(event){
        window.open(`/car:${this.props.car.id}`);
    }

    render () {
        

       return <Grid.Row key={this.props.car.id.toString()}>
      <Grid.Column  >
          <div onClick={this.lol}>
        {<Image  src='https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg' />}
         <p>Марка: {this.props.car.mark}</p>
        <p>Модель: {this.props.car.model}</p>
        <p>Год: {this.props.car.year}</p>
        <p>Цена: {this.props.car.cost}</p>
        {/*<p>Валюта: {car.valuta}</p>*/}
        <p>Трансмиссия: {this.props.car.transmission}</p>
        <p>Тип двигателя: {this.props.car.enginesType}</p>
        <p>Пробег: {this.props.car.mileage}</p>
        <p>Объём двигателя: {this.props.car.amount}</p>
        </div>
      </Grid.Column>
    </Grid.Row>
    }
}

export default Cars;