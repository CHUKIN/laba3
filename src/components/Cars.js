import React from 'react';
import './Cars.css';
import { Grid, Image } from 'semantic-ui-react'
import CarCars from './CarCars'

class Cars extends React.Component {

    render () {
        const listCars = this.props.info.filteredCars.map((car) =><Grid.Row key={car.id.toString()}>  <CarCars car={car}/>     </Grid.Row>);
        return <div className="cars">
           <p>Найдено: {this.props.info.filteredCars.length}</p> 
            <Grid columns={1} divided>
                {listCars}
            </Grid>
        </div> 
    }
}

export default Cars;