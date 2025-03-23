import { useState } from 'react'
import { Nav } from './component/Nav'

import './App.css'
import { Home } from './component/Home'
import StatsGrid from './component/gridSection'
import Founder from './component/founders'
import ScrollingLogoAnimation from './component/companyLogo'
import CommunityLeadersSection from './component/Investors'
import { AccordionItem } from './component/AccordionItem'
import Footer from './component/Footer'


const faqItems = [
  { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?" },
  { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?" },
  { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?" },
];


function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Nav />
      <Home />
      <StatsGrid />
      <div className="container mx-auto px-11 py-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-14">
          <div className="md:w-1/3 mb-0  ">
            <p className="thin-text">Investors</p>
            <h3 className="blod-text">Mentors & Advisors</h3>
          </div>
          <div className="md:w-2/3">
            <p className="thin-p w-[80%]">
              Industry experts, seasoned  entrepreneurs, and investors can apply to become mentors or investors through our platform. Our  team will assess applications to ensure alignment with our community goals.</p>
          </div>
        </div>
      </div>
      <Founder />
      <ScrollingLogoAnimation />
      <ScrollingLogoAnimation />

      <CommunityLeadersSection />
      <section>
        <div className="max-w-4xl mx-auto p-4 py-18 md:py-26">
          <div className='text-center md:mb-12 mb-6'>
            <h2 className="thin-text">FAQs & Support</h2>
            <h1 className="blod-text">Any Questions?</h1>
          </div>

          <div className="mb-12">
            <p className="text-xl text-gray-800 leading-relaxed ">
              Industry experts, seasoned  entrepreneurs, and investors can apply to become mentors or investors through our platform. Our  team will assess applications to ensure alignment with our community goals.
            </p>
          </div>



          <div className="mt-6">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
