import React from 'react'
import ReactDOM from 'react-dom'

import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'
import routes from './routes'

const initialState = window.__INITIAL_STATE__
const store = createStore(initialState)

const MOUNT_NODE = document.getElementById('app')

const render = () => {
  ReactDOM.render(
    <AppContainer store={store} routes={routes} />,
    MOUNT_NODE
  )
}

render()