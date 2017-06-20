import React from 'react';
import './Form.css';
import { Dropdown,Checkbox,Radio,Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Slider from 'material-ui/Slider';
import { Button } from 'semantic-ui-react'
import HeaderUser from './HeaderUser'
import {Grid,Row,Col} from 'react-bootstrap/lib/';

class Form extends React.Component {

    

    render () {
        return <div><div className="form">
            <form onSubmit={this.props.handles.submit}>
                <p>Марка</p>
                <Dropdown name="mark" placeholder='Выберите марку' value={this.props.info.mark} onChange={this.props.handles.setMark} search selection options={this.props.info.marks} />
                 <p>Модель</p>
                <Dropdown name="model" placeholder='Выберите модель' value={this.props.info.model} onChange={this.props.handles.setModel} search selection options={this.props.info.currentModels} />
                  <p>Минимальный Год {this.props.info.year}</p>
                <Slider name="year" max={2017} min={1950} step={1} value={this.props.info.year} onChange={this.props.handles.setYear}/>
                <p>Максимальная Цена {this.props.info.cost}</p>
                <Slider name="cost" max={99999} min={0} step={1} value={this.props.info.cost} onChange={this.props.handles.setCost}/>
                <p>Валюта</p>
                <Dropdown name="valuta" placeholder='Валюта' value={this.props.info.valuta} onChange={this.props.handles.setValuta} fluid selection options={this.props.info.valutas} />
                <br/>
                <p>Трансмиссия</p>
                 <Checkbox name="transmission" toggle label="Автоматика"  onChange={this.props.handles.setTransmission}/>
                 <br/>
                 <br/>
                 <p>Тип двигателя</p>
                   <Radio label='Бензин'name='enginesType'value='Бензин'checked={this.props.info.enginesType === 'Бензин'}onChange={this.props.handles.setType}/>
                   <Radio label='Дизель'name='enginesType'value='Дизель'checked={this.props.info.enginesType === 'Дизель'}onChange={this.props.handles.setType}/>
                   <Radio label='Газ'name='enginesType'value='Газ'checked={this.props.info.enginesType === 'Газ'} onChange={this.props.handles.setType}/>          
                  <br/>
                  <br/>
                    <Input name="mileage" type="Number" label="Максимальный Пробег" min={0} placeholder='Введите число' onChange={this.props.handles.setMileage} />
                     <br/>
                  <br/>
                    <Input name="amount" type="Number" label="Минимальный Объём двигателя" min={0} step={0.1} placeholder='Введите число' onChange={this.props.handles.setAmount} />
                <br/>
                <br/>
                <Button  type="button" onClick={this.props.handles.setClear} >Сбросить</Button>
            </form>
        </div>
        </div>

    }
}

export default Form;