import { StrictMode } from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

import GlobalStyles from './styles/GlobalStyles'
import App from './App'

import { reducer } from './lib/reducers'

const middleware = [logger, thunk]
const store = createStore(reducer, applyMiddleware(...middleware))

render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
