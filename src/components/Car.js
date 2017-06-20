import React from 'react';
import HeaderUser from './HeaderUser'
import { Grid, Image } from 'semantic-ui-react'
import {Row,Col} from 'react-bootstrap/lib/';

class Car extends React.Component {

componentDidMount(){
           this.props.MainActions.getCar(this.props.id.substring(1));
    }



    render () {
        return  <Grid.Column  className="carCars">
            <div onClick={this.showCar}>
        <Row className="show-grid">
      <Col xs={12} md={8}><Image   src={this.props.car.photo} /></Col>
      <Col xs={6} md={4}> <p>Марка: {this.props.car.id}</p>
         <p>Марка: {this.props.car.mark}</p>
        <p>Модель: {this.props.car.model}</p>
        <p>Год: {this.props.car.year}</p>
        <p>Цена: {this.props.car.cost}</p>
        <p>Трансмиссия: {this.props.car.transmission}</p>
        <p>Тип двигателя: {this.props.car.enginesType}</p>
        <p>Пробег: {this.props.car.mileage}</p>
        <p>Объём двигателя: {this.props.car.amount}</p>
        <p>Просмотры: {this.props.car.watch}</p></Col>
        
    </Row>
        </div>
      </Grid.Column>

    }
}

export default Car;