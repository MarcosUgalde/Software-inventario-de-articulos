import React from 'react'
import ReactDOM from 'react-dom/client'
import { Switch, Route } from 'wouter'
import Register from './pages/Register/index.jsx'
import Provider from './context/Provider.jsx'
import Login from './pages/Login/index.jsx'

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path='/signup' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
