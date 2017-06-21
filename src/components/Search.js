import React from 'react'
import Cars from './Cars'
import Form from './Form'
import HeaderUser from './HeaderUser'
import {Grid,Row,Col} from 'react-bootstrap/lib/';

class Search extends React.Component {

    constructor(props){
        super(props);
        this.query = this.query.bind(this);
    }

    componentDidMount(){
        this.props.SearchActions.getCars();
    }

    query(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


    componentDidMount(){
        this.props.SearchActions.getCars();
        var obj = {
             mark:this.query('mark'),
             model:this.query('model'),
             year:this.query('year')?this.query('year'):1950,
             cost:this.query('cost')?this.query('cost'):0,
             transmission:this.query('transmission'),
             enginesType:this.query('enginesType'),
             mileage:this.query('mileage')?this.query('mileage'):0,
             amount:this.query('amount')?this.query('amount'):0
        };
        this.props.SearchActions.setSearch(obj);
    }

  

    render () {
        return <div>
            <HeaderUser/>    
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}><Cars info={this.props.search} /></Col>
                        <Col xs={6} md={4}><Form handles={this.props.SearchActions} info={this.props.search}  /></Col>
                    </Row>
            </Grid>
        </div> 
    }
}

export default Search;