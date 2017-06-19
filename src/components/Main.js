import React from 'react';
import MostPopularCars from './MostPopularCars'
import HeaderUser from './HeaderUser'

class Main extends React.Component {

    componentDidMount(){
            this.props.MainActions.getPopularCars();
    }


    render () {
        return <div>
            <HeaderUser/>
            <MostPopularCars cars={this.props.main.cars}/>
        </div> 
    }
}

export default Main;