


import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

function ConfirmOrderPage() {
  const location = useLocation();
  const { state } = location;
  const orderDetails = state?.orderDetails;

  if (!orderDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold text-red-600">
          Error: No order details found.
        </p>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-t-lg">
            <h2 className="text-4xl font-extrabold text-center">
              Order Confirmation
            </h2>
            <p className="text-center mt-2 text-lg font-medium">
              Thank you for your booking!
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-b-lg">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Booking Details:
              </h3>
              <ul className="space-y-6">
                {orderDetails.cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-700">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.nights} night(s)
                      </p>
                      <span className="text-sm text-gray-500">
                        Dates: {item.startDate} to {item.endDate}
                      </span>
                    </div>
                    <span className="text-lg font-medium text-indigo-600">
                      ${item.price * item.nights}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10">
              <p className="text-xl font-semibold text-gray-800">
                Total Cost:
                <span className="text-3xl font-bold text-indigo-600">
                  {" "}
                  ${orderDetails.totalCost}
                </span>
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Contact Information:
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  <strong className="text-gray-900">Name:</strong>{" "}
                  <span className="font-medium">{orderDetails.contactInfo.name}</span>
                </p>
                <p className="text-lg text-gray-700">
                  <strong className="text-gray-900">Email:</strong>{" "}
                  <span className="font-medium">{orderDetails.contactInfo.email}</span>
                </p>
                <p className="text-lg text-gray-700">
                  <strong className="text-gray-900">Phone:</strong>{" "}
                  <span className="font-medium">{orderDetails.contactInfo.phone}</span>
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Payment Details:
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  <strong className="text-gray-900">Card Type:</strong>{" "}
                  <span className="font-medium">{orderDetails.paymentDetails.cardType}</span>
                </p>
                <p className="text-lg text-gray-700">
                  <strong className="text-gray-900">Card Number:</strong>{" "}
                  <span className="font-medium">{orderDetails.paymentDetails.cardNumber}</span>
                </p>
                <p className="text-lg text-gray-700">
                  <strong className="text-gray-900">Expiry Date:</strong>{" "}
                  <span className="font-medium">{orderDetails.paymentDetails.expiryDate}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmOrderPage;
