import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import SignUp from './components/Pages/SignUp';
import Dashboard from './components/Pages/Dashboard';
import Login from "./components/Pages/Login"
import Destination from "./components/Pages/Destination";
import Crew from './components/Pages/Crew'
import Technology from "./components/Pages/Technology";

function App() {
  
  return (
    
   <div className='container'>
    <Router>
    <Switch>
        <Route path = '/' exact>
          <SignUp/>
        </Route>
        <Route path = '/login'>
          <Login/>
        </Route>
        <Route path = '/dashboard'>
          <Dashboard/>
        </Route>
        <Route path = '/destination'>
          <Destination/>
        </Route>
        <Route path = '/crew'>
          <Crew/>
        </Route>
        <Route path = '/technology'>
          <Technology/>
        </Route>
      </Switch>
    </Router>
   </div>
  )
}

export default App;
