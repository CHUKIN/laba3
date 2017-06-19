import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

class MostPopularCars extends React.Component {
    render () {
        
        const listCars = this.props.cars.map((car) =>  <Grid.Row key={car.id.toString()}>
      <Grid.Column >
        {<Image src='https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg' />}
         <p>Марка: {car.mark}</p>
        <p>Модель: {car.model}</p>
        <p>Год: {car.year}</p>
        <p>Цена: {car.cost}</p>
        {/*<p>Валюта: {car.valuta}</p>*/}
        <p>Трансмиссия: {car.transmission}</p>
        <p>Тип двигателя: {car.enginesType}</p>
        <p>Пробег: {car.mileage}</p>
        <p>Объём двигателя: {car.amount}</p>
      </Grid.Column>
    </Grid.Row>);

       return <div >
       
        <Grid columns={1} divided>
            {listCars}
        </Grid>
        </div> 
    }
}

export default MostPopularCars;