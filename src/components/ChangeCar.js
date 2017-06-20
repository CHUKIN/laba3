import React from 'react';
import HeaderAdmin from './HeaderAdmin'
import { Dropdown,Checkbox,Radio,Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Slider from 'material-ui/Slider';
import {Grid,Row,Col} from 'react-bootstrap/lib/';
import { Button } from 'semantic-ui-react'

class ChangeCar extends React.Component {

    componentDidMount(){
           this.props.MainActions.getCar(this.props.id.substring(1));
    }

    render () {
        return <div> <HeaderAdmin/> 
        
        <Row className="show-grid">
      <Col xs={1} md={2}></Col>
      <Col xs={16} md={8}>  
        <div className="form">
            <form>
                <p>Id {this.props.id.substring(1)}</p>
                <p>Марка</p>
                <Dropdown name="mark" placeholder='Выберите марку' value={this.props.main.mark} onChange={this.props.MainActions.setMark} search selection options={this.props.main.marks} />
                 <p>Модель</p>
                <Dropdown name="model" placeholder='Выберите модель' value={this.props.main.model} onChange={this.props.MainActions.setModel} search selection options={this.props.main.currentModels} />
                  <p>Минимальный Год {this.props.main.year}</p>
                <Slider name="year" max={2017} min={1950} step={1} value={this.props.main.year} onChange={this.props.MainActions.setYear}/>
                <p>Максимальная Цена {this.props.main.cost}</p>
                <Slider name="cost" max={99999} min={0} step={1} value={this.props.main.cost} onChange={this.props.MainActions.setCost}/>
                <br/>
                <p>Трансмиссия</p>
                 <Checkbox name="transmission" toggle label="Автоматика"  onChange={this.props.MainActions.setTransmission}/>
                 <br/>
                 <br/>
                 <p>Тип двигателя</p>
                   <Radio label='Бензин'name='enginesType'value='Бензин'checked={this.props.main.enginesType === 'Бензин'}onChange={this.props.MainActions.setType}/>
                   <Radio label='Дизель'name='enginesType'value='Дизель'checked={this.props.main.enginesType === 'Дизель'}onChange={this.props.MainActions.setType}/>
                   <Radio label='Газ'name='enginesType'value='Газ'checked={this.props.main.enginesType === 'Газ'} onChange={this.props.MainActions.setType}/>          
                  <br/>
                  <br/>
                    <Input name="mileage" type="Number" label="Максимальный Пробег" min={0} placeholder='Введите число' onChange={this.props.MainActions.setMileage} />
                     <br/>
                  <br/>
                    <Input name="amount" type="Number" label="Минимальный Объём двигателя" min={0} step={0.1} placeholder='Введите число' onChange={this.props.MainActions.setAmount} />
                <br/>
                <br/>
                <Button  type="button" onClick={this.props.MainActions.changeCar} >Изменить</Button>
            </form>
        </div></Col>
      <Col xs={1} md={2}></Col>
    </Row>
      
        </div>
    }
}

export default ChangeCar;