import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Layout from './Components/Layout'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import UserLists from './Components/UserLists'
import Users from './Components/Users'
import RegistrationPage from './Components/RegistrationPage'
import Login from './Components/Login'

export default function Routes(store) {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path="lists" component={UserLists} />
      <Route path="about" component={AboutPage} />
      <Route path="users" component={Users} />
      <Route path="register" component={RegistrationPage} />
      <Route path="login" component={Login} />
    </Route>
  )
}