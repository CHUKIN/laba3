import React from 'react';
import MostPopularCars from './MostPopularCars'
import HeaderUser from './HeaderUser'
import 'semantic-ui-css/semantic.min.css';

class Main extends React.Component {

    componentDidMount(){
            this.props.MainActions.getPopularCars();
    }

    render () {
        return <div>
            <HeaderUser/>          
                    <div className="ui grid">
                        <MostPopularCars cars={this.props.main.cars} MainActions={this.props.MainActions} main={this.props.main} />
                    </div>
        </div> 
    }
}

export default Main;