import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Payment from './Payment';

const CheckoutAccordion = () => {
  const [activeSection, setActiveSection] = useState("Personal Information");

  return (
    <div className='w-1/2'>
      <PersonalInfo activeSection={activeSection} setActiveSection={setActiveSection}/>
      <Payment activeSection={activeSection} setActiveSection={setActiveSection}/>
    </div>

  )
}

export default CheckoutAccordion;
