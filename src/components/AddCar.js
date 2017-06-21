import React from 'react';
import HeaderAdmin from './HeaderAdmin'
import { Dropdown,Checkbox,Radio,Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Slider from 'material-ui/Slider';
import {Grid,Row,Col} from 'react-bootstrap/lib/';
import { Button } from 'semantic-ui-react'
import {Image } from 'semantic-ui-react'


class ChangeCar extends React.Component {

    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.add = this.add.bind(this);
    }

    add(event){
        const car={
            mark:this.props.main.mark,
            model:this.props.main.model,
            year:this.props.main.year,
            cost:this.props.main.cost,
            transmission:this.props.main.transmission,
            enginesType:this.props.main.enginesType,
            watch:this.props.main.watch,
            photo:this.props.main.photo,
            mileage:this.props.main.mileage,
            amount:this.props.main.amount,
        }
        this.props.MainActions.addCar(car);
        this.props.SearchActions.getCars();
    }

    show(event){
        var preview = document.getElementById('imgFile');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
        reader.onloadend = function (evt) {
        preview.src = reader.result;
        console.log(preview.src);
        }
        if (file) {
            reader.readAsDataURL(file);
            
    
        } else {
            preview.src = "";
        }
    }

    render () {
        return <div> <HeaderAdmin/>    
        <Row className="show-grid">
      <Col xs={1} md={4}> <Image id="imgFile"  src={this.props.main.photo} onLoad={this.props.MainActions.setPhoto} /></Col>
      <Col xs={16} md={6}>  
        <div className="form">
            <form>
                <p>Марка</p>
                <Dropdown name="mark" placeholder='Выберите марку' value={this.props.main.mark} onChange={this.props.MainActions.setMark} search selection options={this.props.main.marks} />
                <p>Модель</p>
                <Dropdown name="model" placeholder='Выберите модель' value={this.props.main.model} onChange={this.props.MainActions.setModel} search selection options={this.props.main.currentModels} />
                <p>Год {this.props.main.year}</p>
                <Slider name="year" max={2017} min={1950} step={1} value={this.props.main.year} onChange={this.props.MainActions.setYear}/>
                <p>Цена {this.props.main.cost}</p>
                <Slider name="cost" max={99999} min={0} step={1} value={this.props.main.cost} onChange={this.props.MainActions.setCost}/>
                <br/>
                <p>Трансмиссия</p>
                <Checkbox name="transmission" toggle label="Автоматика"  value={this.props.main.transmissionCheck} onChange={this.props.MainActions.setTransmission}/>
                <br/>
                <br/>
                <p>Тип двигателя</p>
                   <Radio label='Бензин'name='enginesType'value='Бензин'checked={this.props.main.enginesType === 'Бензин'}onChange={this.props.MainActions.setType}/>
                   <Radio label='Дизель'name='enginesType'value='Дизель'checked={this.props.main.enginesType === 'Дизель'}onChange={this.props.MainActions.setType}/>
                   <Radio label='Газ'name='enginesType'value='Газ'checked={this.props.main.enginesType === 'Газ'} onChange={this.props.MainActions.setType}/>          
                <br/>
                <br/>
                    <Input name="mileage" type="Number" label="Пробег" value={this.props.main.mileage} min={0} placeholder='Введите число' onChange={this.props.MainActions.setMileage} />
                    <br/>
                <br/>
                    <Input name="amount" type="Number" label="Объём двигателя" value={this.props.main.amount} min={0} step={0.1} placeholder='Введите число' onChange={this.props.MainActions.setAmount} />
                <br/>
                <br/>
                <input type="file" onChange={this.show}/><br/>

                <Button  type="button" onClick={this.add } >Добавить</Button>
            </form>
        </div></Col>
      <Col xs={1} md={2}></Col>
    </Row> 
        </div>
    }
}

export default ChangeCar;