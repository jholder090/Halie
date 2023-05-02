import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Payment from './Payment';

const CheckoutAccordion = () => {
  const [activeSection, setActiveSection] = useState("Personal Information");

  return (
    <div className='checkout__accordion w-3/5 pr-10'>
      <PersonalInfo activeSection={activeSection} setActiveSection={setActiveSection}/>
      <Payment activeSection={activeSection} setActiveSection={setActiveSection}/>
    </div>

  )
}

export default CheckoutAccordion;
