"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  console.log("session", session);

  const createCheckoutSession = async () => {
    if (!session?.user?.email) return;
    // push a document into firebase db
    setLoading(true);

    // const docRef = await addDoc(collection(db, 'customers', session.user.id, 'checkout_sessions'),{
    //     price: "price_1O4JtsJ5VUfcwtGe43hMWLo9",
    //     success_url: window.location.origin,
    //     cancel_url: window.location.origin
    // });
  };

  return (
    <div
      className="mt-8 block cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm
  font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-default 
  disabled:text-white disabled:opacity-80"
    >
      {/* {isSubscribed ? <ManageAccountButton/>:
       isLoadingSubscription || loading ? <LoadingSpinner/> : 
       <button onClick={() => createCheckoutSession()}>Sign Up</button>} */}
      <button onClick={() => createCheckoutSession()}>Sign Up</button>
    </div>
  );
};

export default CheckoutButton;
