import React from 'react';
import MostPopularCars from './MostPopularCars'
import HeaderUser from './HeaderUser'

class Main extends React.Component {
    render () {
        return <div>
            <HeaderUser/>
            <h1>Main</h1>
            <MostPopularCars cars={this.props.main.cars}/>
        </div> 
    }
}

export default Main;