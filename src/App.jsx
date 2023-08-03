import React from 'react'
import './App.css'
import Header from './Header'
import MainContent from './MainContent'

function App() {
  return (
    <div>
      <Header />

      <MainContent
      name='Transform your brand'
      age={18}
      job='Web Developer'
      />

    <MainContent
          name='make some chalenges'
          age={18}
          job='Web Developer'
          />
    </div>
  )
}

export default App
