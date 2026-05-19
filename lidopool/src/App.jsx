import { useState } from 'react'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import IdealChem from './components/IdealChem'
import NewRecord from './components/NewRecord'
import WorkSite from './components/WorkSite'
import './css/App.css'

function App() {

  return(
    <>
      <div className='app'>
        <div className='container'>
          <header>
            <TopNav />
          </header>
          <nav>
            <Sidebar/>
          </nav>
          <main className='main-container'>
            <header>
              <h1>New Pool Reading</h1>
              <p>Enter water chemistry readings for the selected pool</p>
            </header>
            <div className='left-column'>
              <NewRecord/>
            </div>
            <div className='right-column'>
              <WorkSite/>
              <IdealChem/>
            </div>  
          </main>
        </div>
      </div>
    </>
  )
}
  


export default App;
