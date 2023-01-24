import React from 'react'
import styles from './style'
import { Introducing, Clients, CTA, Navbar, Stats, Testimonials, Footer, Hero, Jamila, Education, Stats2 } from './components'

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
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>




      </div>

  )
}

export default App