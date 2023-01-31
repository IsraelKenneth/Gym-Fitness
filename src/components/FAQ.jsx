import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import Faq from 'react-faq-component';
import styles from '../style'


const FAQ = () => {

    const [rows, setRowsOption] = useState(null);
    const [row, setRow] = useState(0);

    const data = {
        title: "Why sub with us",
        rows: [
            {
                title:
                    "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "Can I use html as content",
                content: `Yes, here is an example of a <a href="https://binodswain.github.io/react-faq-component/">link</a>`,
            },
            {
                title: "What is the package version",
                content: "v1.0.0",
            },
        ],
    };

  return (


      <section id='FAQ' className={`flex flex-col sm:py-20 py-6 bg-transparent `}>

          <div className={`flex flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6 w-full`}>

              <div className="flex flex-col justify-center items-center ">
                  <h1 className="flex-1 font-Oswald uppercase font-semibold ss:text-[38px] text-[13px] text-black ss:leading-[50.8px] leading-[48px]">
                      Any Questions? Look here.</h1>
                  <h4 className='font-Oswald uppercase font-semibold ss:text-[21px] text-[11.5px] text-black ss:leading-[50.8px] leading-[48px]'>Can&apos;t find an answer? email us at contact@jamilatemplate.com</h4>
              </div>
              <div className="w-full">
                  <div>

                      <div className="faq-style-wrapper">
                          <Faq data={data}  />
                      </div>
                  </div>
              </div>


                          
              
              </div>

          

      </section>
  )
}

export default FAQ

 