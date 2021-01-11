import React from 'react';
import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import RightWidget from './components/RightWidget';
import Login from './pages/Login';
import { useStateValue } from './providers/StateProvider';

const App = () => {
  const [{ user }, dispatch] = useStateValue();
  if (!user) {
    return <Login />;
  } else {
    return (
      <div>
        <Header user={user} />
        <div className='app-body'>
          <Sidebar user={user} />
          <Feed />
          <RightWidget />
        </div>
      </div>
    );
  }
};

export default App;
