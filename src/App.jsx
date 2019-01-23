import React from 'react';
import Counter from './Counter';
import './App.css';

const App = () => (
  <div className="flex min-h-screen font-sans bg-grey-lighter items-center">
    <div className="container mx-auto text-center">
      <Counter />
    </div>
  </div>
);

export default App;
