import React from 'react'
import './App.css'
import Header from './Header'
import MainContent from './MainContent'
import MainContentImg from './MainContentImg'

function App() {
  return (
    <div>
      <Header />

      <div className='main'>
        <div className='Block1'>
          <MainContent
            title='Transform your brand'
            text='We are a full-service creative agency specializing in helping brands grow fast.
            Engage your clients through compelling visuals that do most of the marketing for you.'
            input='Learn more'
            />
        </div>

        <MainContentImg
          img='./src/assets/images/desktop/image-transform.jpg'
        />

        <MainContentImg
          img='./src/assets/images/desktop/image-stand-out.jpg'
        />

        <div className='Block4'>
          <MainContent
            title='Stand out to the right audience'
            text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. '
            input='Learn more'
            />
        </div>
        </div>
    </div>
  )
}

export default App
