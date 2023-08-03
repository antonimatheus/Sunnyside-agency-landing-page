import React from 'react'
import './App.css'
import Header from './Header'
import MainContent from './MainContent'

function App() {
  return (
    <div>
      <Header />

      <div className='main'>
        <MainContent
          title='Transform your brand'
          text='one two three'
          />
        </div>
    </div>
  )
}

export default App
