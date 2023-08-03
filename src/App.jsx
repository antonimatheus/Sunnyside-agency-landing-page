import React from 'react'
import './App.css'
import Header from './Header'
import MainContent from './MainContent'

function App() {
  return (
    <div>
      <Header />

      <MainContent 
        title='Transform your brand'
        text='one two three'
      />

      <MainContent
        title='make some chalenges'
        text='uno, due tre'
      />

      <MainContent
        title='lalalalla'
        text='un, dos tres'
      />

      <MainContent
        title='oioioioioi'
        text='un, dos tres'
      />
    </div>
  )
}

export default App
