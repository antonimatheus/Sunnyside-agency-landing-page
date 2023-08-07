import React from 'react'
import './App.css'
import Header from './Header'
import MainContent from './MainContent'
import MainContentImg from './MainContentImg'
import MainContentTwo from './MainContentTwo'
import ClientTestimonials from './ClientTestimonials'

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
        <div className='MainContentTwo1'>
          <MainContentTwo
            title='Graphic design'
            text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
          />
        </div>

        <div className='MainContentTwo2'>
          <MainContentTwo
            title='Photography'
            text='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
          />
        </div>

        <div className='ClientTestimonials--App'>
          <h1>Client testimonials</h1>
          <div className='ClientTestimonials--AppBlock'>
            <ClientTestimonials
            img='./src/assets/images/image-emily.jpg'
            description='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
            name='Emily R.'
            job='Marketing Director'
            />
            <ClientTestimonials
            img='./src/assets/images/image-thomas.jpg'
            description='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
            name='Thomas S.'
            job='Chief Operating Officer'
            />
            <ClientTestimonials
            img='./src/assets/images/image-jennie.jpg'
            description='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            Jennie F.'
            name='Jhennie F.'
            job='Businees Owner'
            />
          </div>
        </div>

        </div>
    </div>
  )
}

export default App
