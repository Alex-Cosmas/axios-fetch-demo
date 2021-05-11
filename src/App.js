import React from 'react'
import './App.css';
import AxiosDemo from './axiosdemo'
import FetchDemo from './fetchdemo'

function App() {

  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <div className='container mx-auto px-24'>

        <div className='flex gap-10'>
          <div>
            <AxiosDemo />
          </div>
          <div>
            <FetchDemo />
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
