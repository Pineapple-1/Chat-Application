import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Join from './components/join/join'
import Chat from './components/chat/chat'

const App = () =>(
  <Router>
    <Route path="/"  exact component={Join}/>
    <Route path="/Chat" component={Chat}/>
    </Router>
)

export default App;
