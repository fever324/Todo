import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import todoApp from './reducers'
import App from './components/App'
import { socketMiddleware, connectToServer } from './middlewares/socketMiddleware'
import logger from './middlewares/logger'

const middlewares = applyMiddleware(socketMiddleware, logger)
const store = createStore(todoApp, middlewares)

connectToServer(store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/(:filter)' component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
