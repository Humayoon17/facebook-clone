import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import RightWidget from './components/RightWidget';
import Login from './pages/Login';

const App = () => {
  const [user, setUser] = useState(null);
  if (!user) {
    return <Login />;
  } else {
    return (
      <div>
        <Header />
        <div className='app-body'>
          <Sidebar />
          <Feed />
          <RightWidget />
        </div>
      </div>
    );
  }
};

export default App;
