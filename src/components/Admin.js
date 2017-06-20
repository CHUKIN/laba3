import React from 'react';
import {Link, HashRouter,Switch,Route, BrowserRouter} from 'react-router-dom'
import HeaderAdmin from './HeaderAdmin'
import Cars from './Cars'
import {Grid,Row,Col,Table} from 'react-bootstrap/lib/';
import { Button } from 'semantic-ui-react'

class Admin extends React.Component {


     constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.delete = this.delete.bind(this);
    }

     componentDidMount(){
            this.props.SearchActions.getCars();
    }

    delete(event){
        this.props.MainActions.deleteCar(event.target.value);
        this.props.SearchActions.getCars();
    }

    show(event){

        const elem = document.getElementsByClassName('options');

        for(let i=0;i<elem.length;i++){
            elem[i].setAttribute('hidden','true');
        }
        



       document.getElementById(event.target.getAttribute('value')).removeAttribute('hidden');
       
    }



    render () {
        const listCars = this.props.search.cars.map((car) =><tr  key={car.id.toString()}>  
            <td>{car.id}</td>
            <td>{car.mark}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.cost}</td>
            <td>{car.transmission}</td>
            <td>{car.enginesType}</td>
            <td>{car.mileage}</td>
            <td>{car.amount}</td>
            <td>{car.watch}</td>
            <td><img width="100px" src='https://look.com.ua/pic/201209/1600x900/look.com.ua-19447.jpg' value={car.id} onMouseOver={this.show}  /></td>
            <td className="options" hidden id={car.id}> <Link to={`/change:${car.id}`}>Изменение</Link> <br/>  <Button value={car.id}  onClick={this.delete}>Удаление</Button></td>
                 </tr>);


        return <div> <HeaderAdmin/>
            <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Марка</th>
        <th>Модель</th>
        <th>Год</th>
        <th>Стоимость</th>
        <th>Передача</th>
        <th>Тип</th>
        <th>Пробег</th>
        <th>Объём</th>
        <th>Просмотры</th>
        <th>Фото</th>
        <th>Опции</th>
      </tr>
    </thead>
    <tbody>
     {listCars}
    </tbody>
  </Table>
        </div> 
    }
}

export default Admin;