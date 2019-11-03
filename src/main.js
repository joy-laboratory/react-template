import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createHashHistory } from 'history'

{{#if redux}}
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { store } from './store'
{{/if}}

{{#if element}}
import 'element-theme-default'
{{/if}}

/**
 * 引入路由
 */
import Routers from '@/router'

{{#if redux}}
const history = syncHistoryWithStore(createHashHistory(), store)
{{/if}}

ReactDOM.render(
  {{#if redux}}
  <Provider store={store}>
    <Router history={history}>
      <Routers />
    </Router>
  </Provider>,
  {{else}}
  <Routers />,
  {{/if}}
  document.getElementById('app')
)
