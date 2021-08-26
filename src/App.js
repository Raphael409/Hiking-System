import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './about';
import Create from './create';
import EventDetails from './eventdetails';
import Home from './home';
import Navbar from './navbar';
import User from './user';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
            <Route exact path='/user'>
              <User />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route path='/events/:id'>
              <EventDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
