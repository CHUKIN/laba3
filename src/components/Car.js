import React from 'react';
import HeaderUser from './HeaderUser'

class Car extends React.Component {
    render () {
        return <div>
            <HeaderUser/>
            <h1>Машинка</h1>
            {this.props.id}
        </div> 
    }
}

export default Car;