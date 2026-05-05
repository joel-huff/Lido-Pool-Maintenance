import { useState } from 'react'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {

  return (
    <>
      <header>
        <TopNav />
      </header>
      <main>
        <Sidebar />
      </main>
    </>
  )
}

export default App
