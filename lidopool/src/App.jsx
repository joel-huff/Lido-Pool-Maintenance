import { useState } from 'react'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'

import Dashboard from './components/Dashboard'
import './css/App.css'


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const pages = [
    <Dashboard/>,
    <h1>Sites</h1>,
    <h1>Readings</h1>,
    <h1>Alerts!</h1>
  ];

  return(
    <>
      <div className='app'>
        <div className='container'>
          <header>
            <TopNav />
          </header>
          <nav>
            <Sidebar 
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </nav>
          <main className='main-container'>
            {pages[selectedIndex]}
          </main>
        </div>
      </div>
    </>
  )
}


export default App;