import React from 'react';
//import auth from '../auth';

const Dashboard = () => {
  const style = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white'
  };

  return (
    <div style={style}>
      <p>Congrats, you're authenticated!</p>
    </div>
  );
};

export default Dashboard;
