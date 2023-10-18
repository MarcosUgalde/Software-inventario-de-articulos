import React from 'react'
import ReactDOM from 'react-dom/client'
import { Switch, Route, Redirect } from 'wouter'
import Register from './pages/Register/index.jsx'
import Provider from './context/Provider.jsx'
import Login from './pages/Login/index.jsx'
import Guard from './components/Guard/index.jsx'
import MainPanel from './pages/MainPanel/index.jsx'
import NavBar from './components/NavBar/index.jsx'
import Suppliers from './pages/Suppliers/index.jsx'
import Newproduct from './pages/NewProduct/index.jsx'
import Newsupplier from './pages/Newsupplier/index.jsx'
import Updateproduct from './pages/Updateproduct/index.jsx'

const Main = () => {
  return (
    <Provider>
      <NavBar />  
      <Switch>
        <Route path='/signup' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/'>
          <Guard component={MainPanel} />
        </Route>
        <Route path='/suppliers'>
          <Guard component={Suppliers} />
        </Route>
        <Route path='/new-product'>
          <Guard component={Newproduct} />
        </Route>
        <Route path='/new-supplier'>
          <Guard component={Newsupplier} />
        </Route>
        <Route path='/update-product/:id'>
          <Guard component={Updateproduct} />
        </Route>
        <Redirect to='/login' />
      </Switch>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
