import React, { useEffect, useState } from "react";
import axios from "axios";
import AppRoutes from './AppRoutes';
import { Navbar, Footer } from "./components/index";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';



const App = () => {
  const [stripePromise, setStripePromise] = useState(null);

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {

    
    setStripePromise(loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`));
  }, []);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.post('/stripe/client-secret', {

      })
      setClientSecret(data);

    }
    fetchData();
  }, [])



  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }} >
          <Navbar />
          <AppRoutes />
          <Footer />
          <div>hello world</div>
        </Elements>
      )}
    </>

  );
};

export default App;
