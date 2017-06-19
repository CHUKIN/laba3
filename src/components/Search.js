import React from 'react'
import Cars from './Cars'
import Form from './Form'




class Search extends React.Component {
    render () {
        return <div>
            <h1>Search</h1>
           <Cars info={this.props.search} />
           <Form handles={this.props.SearchActions} info={this.props.search}  />
        </div> 
    }
}

export default Search;