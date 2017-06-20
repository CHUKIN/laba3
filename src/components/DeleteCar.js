import React from 'react';
import HeaderAdmin from './HeaderAdmin'

class DeleteCar extends React.Component {

    componentDidMount(){
           this.props.MainActions.deleteCar(this.props.id.substring(1));
    }

    render () {
        return <div>
            <HeaderAdmin/>
            <h1>Машина удалена!</h1>
        </div> 
    }
}

export default DeleteCar;