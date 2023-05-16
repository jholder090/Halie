import React, { useEffect, useState } from "react";
import axios from "axios";
import AppRoutes from './AppRoutes';
import { Navbar, Footer } from "./components/index";
// Elements here allows us to use elements, components, and gives access to ResolveStripe object within nested components below
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';



const App = () => {
  // Create Stripe object
  const [stripePromise, setStripePromise] = useState(null);
  // Initialize elements
  const [clientSecret, setClientSecret] = useState('');

  // useEffect(() => {
  //   // Promise that resolves to a Stripe object
  //   // Uses publishable key as an argument
  //   setStripePromise(loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`));
  // }, []);

  // // Create payment intent using client secret from server
  // useEffect(() => {
  //   async function fetchData() {
  //     const { data } = await axios.post('/stripe/client-secret', {
  //     })
  //     const { clientSecret } = data;
  //     setClientSecret(clientSecret);
  //   }
  //   fetchData();
  // }, [])

  // options={{ clientSecret }}

  return (
    <>
      {/* {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }} > */}
          <Navbar />
          <AppRoutes />
          <Footer />
        {/* </Elements>
      )} */}
    </>

  );
};

export default App;
