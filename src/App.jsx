import { useState } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import './App.css'
import YoAfrica from './YoAfrica.jsx'
// import Dashboard from './Dashboard.jsx'
function App() {

  return (
      <Router>
          <YoAfrica />
      </Router>
  )
}

export default App
