import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import CarCars from './CarCars'

class MostPopularCars extends React.Component {
    render () {
        
        const listCars = this.props.cars.map((car) =>   <div className="three wide column" key={car.id.toString()}> <Grid.Row   >  <CarCars car={car} MainActions={this.props.MainActions} main={this.props.main}/>     </Grid.Row> </div>);

       return <div >
       
        <Grid columns={1} divided>
            {listCars}
        </Grid>
        </div> 
    }
}

export default MostPopularCars;