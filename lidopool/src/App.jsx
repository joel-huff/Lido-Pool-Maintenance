import { useState } from 'react'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {

  return(
    <>
      <div className='app'>
          <div className='container'>
        <header>
          <TopNav />
        </header>
        <main>
          <Sidebar/>
        </main>
      </div>
      </div>

    </>
  )
}
  


export default App;
