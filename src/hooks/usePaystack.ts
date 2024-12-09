import { useState, useEffect } from "react";
import { GetUserdata } from "../api/auth";

type PaymentType = 'player' | 'scout';

const usePaystack = (paymentType:PaymentType) => {
  const publicKey = "pk_test_6b17bff61035f7795ab603ed131a9cd6f4d1dece";
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [usertoken, setUsertoken] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("hopettt")?.trim();
    if (userToken) {
      const cleanedUserToken = userToken.replace(/"/g, "");
      setUsertoken(cleanedUserToken);
    }
  }, []);

  const getuser = async () => {
    const res = await GetUserdata(usertoken);
    setEmail(res.email);
  };

  useEffect(() => {
    if (usertoken) {
      getuser();
    }
  }, [usertoken]);

  // Define amounts based on payment type
  const paymentAmounts: Record<PaymentType, number> = {
  player: 4000, // Example amount in Naira
  scout: 7000,
};

  const amount = paymentAmounts[paymentType] || 0;

  const config = {
    email,
    amount: amount * 100, // Convert to kobo
    publicKey,
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Email",
          variable_name: "email",
          value: email,
        },
      ],
    },
  };

  const handleSuccess = (reference: { reference: any; }) => {
    setLoading(true);
    setMessage("Processing payment...");

    fetch("https://api.qlsportsonline.com/v1.0/src/api/verify_API.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reference: reference.reference,
        email,
        amount,
        paymentType
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.status === "success") {
          setMessage("Payment verified successfully!");
        } else {
          setMessage(`Verification failed: ${data.message}`);
        }
      })
      .catch((error) => {
        setLoading(false);
        setMessage("An error occurred while verifying the payment.");
        console.error(error);
      });
  };

  const handleClose = () => {
    setMessage("Transaction was canceled by the user.");
  };

  return {
    email,
    loading,
    message,
    config,
    handleSuccess,
    handleClose,
  };
};

export default usePaystack;
