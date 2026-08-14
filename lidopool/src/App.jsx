import { useState } from 'react'
import TopNav from './components/nav-components/TopNav'
import Sidebar from './components/nav-components/Sidebar'
import Chemistry from './pages/Chemistry'
import Services from './pages/Services'
import Readings from './pages/Readings'
import Worksites from './pages/Worksites'
import Alerts from './pages/Alerts'
import './css/App.css'


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const pages = [
    <Chemistry/>,
    <Services/>,
    <Readings />,
    <Worksites />,
    <Alerts />
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