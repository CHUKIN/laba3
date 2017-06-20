import React from 'react'
import Cars from './Cars'
import Form from './Form'
import HeaderUser from './HeaderUser'
import {Grid,Row,Col} from 'react-bootstrap/lib/';


class Search extends React.Component {
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