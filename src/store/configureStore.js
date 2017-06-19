import { createStore, applyMiddleware ,compose} from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk' 
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'


export default function configureStore(initialState) {
  const history = createHistory()
  const middleware = routerMiddleware(history)
  const store = createStore(rootReducer, initialState,compose(applyMiddleware(thunk,middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
  return store
}