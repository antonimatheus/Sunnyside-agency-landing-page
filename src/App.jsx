import React from 'react'
import './App.css'
import Header from './Header'
import MainContent from './MainContent'
import MainContentImg from './MainContentImg'
import MainContentTwo from './MainContentTwo'
import ClientTestimonials from './ClientTestimonials'
import FooterImg from './FooterImg'
import Footer from './Footer'

import transform from '../src/assets/images/desktop/image-transform.jpg'
import stand_out from '../src/assets/images/desktop/image-stand-out.jpg'
import emily from '../src/assets/images/image-emily.jpg'
import thomas from '../src/assets/images/image-thomas.jpg'
import jennie from '../src/assets/images/image-jennie.jpg'
import gallery_milkbottles from '../src/assets/images/desktop/image-gallery-milkbottles.jpg'
import gallery_orange from '../src/assets/images/desktop/image-gallery-orange.jpg'
import gallery_cone from '../src/assets/images/desktop/image-gallery-cone.jpg'
import gallery_sugarcubes from '../src/assets/images/desktop/image-gallery-sugarcubes.jpg'

function App() {
  return (
    <div>
      <Header />

      <div className='main'>
        <div className='main--block'>
          <div className='Block1'>
            <MainContent
              title='Transform your brand'
              text='We are a full-service creative agency specializing in helping brands grow fast.
              Engage your clients through compelling visuals that do most of the marketing for you.'
              input='Learn more'
            />
          </div>
          <div className='Block2'>
            <MainContentImg
              img={transform}
            />
          </div>
          <div className='Block3'>
            <MainContentImg
              img={stand_out}
            />
          </div>
          <div className='Block4'>
            <MainContent
              title='Stand out to the right audience'
              text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. '
              input='Learn more'
              />
          </div>
        </div>
        <div className='Main2'>
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
        </div>

        <div className='ClientTestimonials--App'>
          <h1>Client testimonials</h1>
          <div className='ClientTestimonials--AppBlock'>
            <ClientTestimonials
            img={emily}
            description='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
            name='Emily R.'
            job='Marketing Director'
            />
            <ClientTestimonials
            img={thomas}
            description='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
            name='Thomas S.'
            job='Chief Operating Officer'
            />
            <ClientTestimonials
            img={jennie}
            description='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            Jennie F.'
            name='Jhennie F.'
            job='Businees Owner'
            />
          </div>
        </div>

        <div className='FooterImgBlock'>
          <FooterImg
          footerImg_one={gallery_milkbottles}
          footerImg_two={gallery_orange}
          footerImg_three={gallery_cone}
          footerImg_four={gallery_sugarcubes}
          />
        </div>

        <div className='FooterBlock'>
          <Footer />
        </div>
        
      </div>
    </div>
  )
}

export default App
