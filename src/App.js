import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';

import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/rooms'>
          <Rooms />
        </Route>
        <Route exact path='/rooms/:roomId'>
          <SingleRoom />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>

        <Route exact path='/contact-us'>
          <ContactUs />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
