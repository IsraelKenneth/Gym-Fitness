import React from 'react'
import styles from './style'
import "./App.css"
import { Introducing, CTA, Navbar, Stats, Footer, Hero, Jamila, Education, Stats2, Gallery, Packages, CTA2, FAQ, Testimonials } from './components'

const App = () => {
  return (
    <div className="bg-overal w-full overflow-hidden ">
          <div className={`${styles.paddingX} ${styles.flexCenter} `} >
          <div className={`${styles.boxWidth}`}>
        <Navbar />
          </div>
          </div>
      <div className={`bg-[#F9F9F9] ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
        <Hero />
          </div>
          </div>

        <div className={`bg-[#FFFFFF] ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Introducing />
            <Jamila /> 
            <Education />
        </div>
      </div>
          <div className={`bg-image-Stats ss:my-[4rem] my-[1rem]  ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Stats2 />
            </div>
          </div>

      <div className={`bg-[#FFFFFF] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Gallery />
          <CTA />
          <Packages />
        </div>
      </div>
          <div className={`bg-Footer-CTA mt-10 mb-10 ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <CTA2/>
            </div>
          </div>
      <div className={`bg-[#FFFFFF] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <FAQ />
        </div>
      </div>
          <div className={`mt-10 mb-10 ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
            <Testimonials />
            <Footer />
            </div>
          </div>

          

      </div>

  )
}

export default App