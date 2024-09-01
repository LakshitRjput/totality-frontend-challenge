

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cartItems, onCheckout }) {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardType: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!contactInfo.name) {
      formErrors.name = "Name is required";
      isValid = false;
    }
    if (!contactInfo.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(contactInfo.email)) {
      formErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!contactInfo.phone) {
      formErrors.phone = "Phone number is required";
      isValid = false;
    }

    if (!paymentDetails.cardNumber) {
      formErrors.cardNumber = "Card number is required";
      isValid = false;
    }
    if (!paymentDetails.expiryDate) {
      formErrors.expiryDate = "Expiry date is required";
      isValid = false;
    }
    if (!paymentDetails.cvv) {
      formErrors.cvv = "CVV is required";
      isValid = false;
    } else if (paymentDetails.cvv.length !== 3) {
      formErrors.cvv = "CVV must be 3 digits";
      isValid = false;
    }
    if (!paymentDetails.cardType) {
      formErrors.cardType = "Card type is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleCheckout = () => {
    if (validateForm()) {
      const totalCost = cartItems.reduce(
        (total, item) => total + item.price * item.nights,
        0
      );

      const orderDetails = {
        cartItems,
        contactInfo,
        paymentDetails,
        totalCost,
      };

      navigate("/confirm-order", { state: { orderDetails } });
      onCheckout();
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Checkout
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset className="mb-6">
            <legend className="text-xl font-semibold mb-4 text-gray-700">
              Contact Information
            </legend>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={contactInfo.name}
                  onChange={(e) =>
                    setContactInfo({ ...contactInfo, name: e.target.value })
                  }
                  className="mt-2 block w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactInfo.email}
                  onChange={(e) =>
                    setContactInfo({ ...contactInfo, email: e.target.value })
                  }
                  className="mt-2 block w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={contactInfo.phone}
                  onChange={(e) =>
                    setContactInfo({ ...contactInfo, phone: e.target.value })
                  }
                  className="mt-2 block w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </fieldset>

          <fieldset className="mb-6">
            <legend className="text-xl font-semibold mb-4 text-gray-700">
              Payment Details
            </legend>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="cardType"
                  className="block text-sm font-medium text-gray-600"
                >
                  Card Type
                </label>
                <select
                  id="cardType"
                  value={paymentDetails.cardType}
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      cardType: e.target.value,
                    })
                  }
                  className="mt-2 block w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select Card Type
                  </option>
                  <option value="Visa">Visa</option>
                  <option value="MasterCard">MasterCard</option>
                  <option value="American Express">American Express</option>
                  <option value="Discover">Discover</option>
                </select>
                {errors.cardType && (
                  <p className="text-red-500 text-xs mt-1">{errors.cardType}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  value={paymentDetails.cardNumber}
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      cardNumber: e.target.value,
                    })
                  }
                  className="mt-2 block w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
                )}
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="expiryDate"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={paymentDetails.expiryDate}
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        expiryDate: e.target.value,
                      })
                    }
                    className="mt-2 block w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.expiryDate && (
                    <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
                  )}
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-600"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    value={paymentDetails.cvv}
                    onChange={(e) =>
                      setPaymentDetails({ ...paymentDetails, cvv: e.target.value })
                    }
                    className="mt-2 block w-full bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                  )}
                </div>
              </div>
            </div>
          </fieldset>

          <button
            type="button"
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
