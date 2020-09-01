import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Friend/Home/Home';
import Nomatch from './Nomatch/Nomatch';
import FriendDetail from './component/FriendDetail/FriendDetail';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>

        <Route path="/Friend/:id">
            <FriendDetail></FriendDetail>
        </Route>

        <Route path="*">
           <Nomatch></Nomatch>
        </Route>
       
      </Switch>
    </Router>
  );
}

export default App;
