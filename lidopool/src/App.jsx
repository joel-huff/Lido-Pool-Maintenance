import { useState } from 'react'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import Chemistry from './pages/Chemistry'
import Services from './pages/Services'
import './css/App.css'


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const pages = [
    <Chemistry/>,
    <Services/>,
    <h1>Readings</h1>,
    <h1>Alerts!</h1>
  ];

  return(
    <>
      <div className='app'>
          <header>
            <TopNav />
          </header>
          <Sidebar 
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <main>
            {pages[selectedIndex]}
          </main>
      </div>
    </>
  )
}


export default App;