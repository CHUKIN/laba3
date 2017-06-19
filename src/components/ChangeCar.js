import React from 'react';
import HeaderUser from './HeaderUser'

class ChangeCar extends React.Component {
    render () {
        return <div>
            <HeaderUser/>
            <h1>Изменение Машинка</h1>
            {this.props.id}
        </div> 
    }
}

export default ChangeCar;