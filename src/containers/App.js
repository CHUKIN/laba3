import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Cars from '../components/Cars';
import Form from '../components/Form';
import Main from '../components/Main';
import Search from '../components/Search';
import Admin from '../components/Admin';
import AddCar from '../components/AddCar';
import Car from '../components/Car';
import ChangeCar from '../components/ChangeCar';
import './App.css';
import * as SearchActions from '../actions/SearchActions'
import * as MainActions from '../actions/MainActions'
import { Router, IndexRoute, browserHistory } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import {Link, HashRouter,Switch,Route, BrowserRouter} from 'react-router-dom'


const history = createHistory()


class App extends Component {
    

    render () {
        return  <BrowserRouter browserHistory={history}>
    <div>
      <Route exact path="/"  render={()=><Main {...this.props}/>} />
      <Route path="/search" render={()=><Search {...this.props}/>}/>
      <Route path="/admin" render={()=><Admin {...this.props}/>}/>
      <Route path="/add" render={()=><AddCar {...this.props}/>}/>
      <Route path="/car:id" render={({match})=><Car {...this.props} id={match.params.id}/>}/>
      <Route path="/change:id" render={({match})=><ChangeCar {...this.props} id={match.params.id}/>}/>

      
    </div>
  </BrowserRouter>
    }
        
}



function mapStateToProps(state) {
  return {
    search: state.search,
    main: state.main
  }
}

function mapDispatchToProps(dispatch) {
  return {
    SearchActions: bindActionCreators(SearchActions,dispatch),
    MainActions: bindActionCreators(MainActions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
