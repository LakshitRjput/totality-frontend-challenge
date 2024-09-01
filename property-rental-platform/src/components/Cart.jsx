


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Cart({ cartItems, onRemove, onIncrease, onDecrease, onUpdateCart }) {
//   const [selectedDates, setSelectedDates] = useState({});
//   const [errors, setErrors] = useState({});

//   const total = cartItems.reduce((acc, item) => acc + item.price * item.nights, 0);

//   const onDateChange = (itemId, startDate) => {
//     const endDate = new Date(startDate);
//     const nights = cartItems.find(item => item.id === itemId).nights;
//     endDate.setDate(endDate.getDate() + nights );

//     setSelectedDates(prevDates => ({
//       ...prevDates,
//       [itemId]: { startDate, endDate }
//     }));

//     // Clear any existing error for this item
//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [itemId]: ''
//     }));

//     const updatedCartItems = cartItems.map(item => 
//       item.id === itemId ? { ...item, startDate, endDate: endDate.toISOString().split('T')[0] } : item
//     );

//     onUpdateCart(updatedCartItems);
//   };

//   const handleCheckout = (e) => {
//     let hasErrors = false;
//     const newErrors = {};

//     cartItems.forEach(item => {
//       if (!selectedDates[item.id] || !selectedDates[item.id].startDate) {
//         newErrors[item.id] = 'Please select a start date for this item.';
//         hasErrors = true;
//       }
//     });

//     setErrors(newErrors);

//     if (hasErrors) {
//       e.preventDefault(); // Prevent checkout if there are errors
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {cartItems.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty</p>
//       ) : (
//         cartItems.map(item => (
//           <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-6 flex items-center">
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-32 h-32 object-cover rounded-md mr-4"
//             />
//             <div className="flex-1">
//               <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
//               <p className="text-gray-700 mb-2">Details: {item.description}</p>
//               <p className="text-gray-700 mb-2">Checkin Time : 12:00 pm </p>
//               <p className="text-gray-700 mb-2">Checkout Time : 11:59 am</p>
              
//               <p className="text-lg font-medium text-gray-900 mb-2">Price: ${item.price}/night</p>
//               <p className="text-sm text-gray-600 mb-2">Nights: {item.nights}</p>

//               <div className="mb-2">
//                 <label className="block text-gray-700 mb-1">Select Start Date:</label>
//                 <input
//                   type="date"
//                   onChange={(e) => onDateChange(item.id, e.target.value)}
//                   className="border border-gray-300 rounded-md p-2"
//                 />
//                 {selectedDates[item.id] && (
//                   <p className="block text-gray-700 mt-2 mb-1">
//                     End Date: {selectedDates[item.id].endDate.toISOString().split('T')[0]}
//                   </p>
//                 )}
//                 {errors[item.id] && (
//                   <p className="text-red-500 text-sm mt-1">{errors[item.id]}</p>
//                 )}
//               </div>

//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => onIncrease(item)}
//                   className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-150 ease-in-out"
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() => onDecrease(item)}
//                   className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 transition duration-150 ease-in-out"
//                 >
//                   -
//                 </button>
//                 <button
//                   onClick={() => onRemove(item)}
//                   className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-150 ease-in-out"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//       <h3 className="text-2xl font-bold text-gray-900 mt-6">Total: ${total.toFixed(2)}</h3>
//       <div className="flex justify-center">
//         <Link to="/checkout" onClick={handleCheckout}>
//           <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition duration-150 ease-in-out">
//             Check Out
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Cart;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, onRemove, onIncrease, onDecrease, onUpdateCart }) {
  const [selectedDates, setSelectedDates] = useState({});
  const [errors, setErrors] = useState({});

  const total = cartItems.reduce((acc, item) => acc + item.price * item.nights, 0);

  const onDateChange = (itemId, startDate) => {
    const endDate = new Date(startDate);
    const nights = cartItems.find(item => item.id === itemId).nights;
    endDate.setDate(endDate.getDate() + nights);

    setSelectedDates(prevDates => ({
      ...prevDates,
      [itemId]: { startDate, endDate }
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [itemId]: ''
    }));

    const updatedCartItems = cartItems.map(item => 
      item.id === itemId ? { ...item, startDate, endDate: endDate.toISOString().split('T')[0] } : item
    );

    onUpdateCart(updatedCartItems);
  };

  const handleCheckout = (e) => {
    let hasErrors = false;
    const newErrors = {};

    cartItems.forEach(item => {
      if (!selectedDates[item.id] || !selectedDates[item.id].startDate) {
        newErrors[item.id] = 'Please select a start date for this item.';
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (hasErrors) {
      e.preventDefault(); // Prevent checkout if there are errors
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div 
            key={item.id} 
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center w-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full sm:w-32 h-32 object-cover rounded-md mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="flex-1 w-full">
              <h2 className="text-xl font-semibold mb-2 break-words">{item.title}</h2>
              <p className="text-gray-700 mb-2 truncate">Details: {item.description}</p>
              <p className="text-gray-700 mb-2">Checkin Time: 12:00 pm</p>
              <p className="text-gray-700 mb-2">Checkout Time: 11:59 am</p>
              
              <p className="text-lg font-medium text-gray-900 mb-2">Price: ${item.price}/night</p>
              <p className="text-sm text-gray-600 mb-2">Nights: {item.nights}</p>

              <div className="mb-2 w-1/2 sm:max-w-xs">
                <label className="block text-gray-700 mb-1">Select Start Date:</label>
                <input
                  type="date"
                  onChange={(e) => onDateChange(item.id, e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                {selectedDates[item.id] && (
                  <p className="block text-gray-700 mt-2 mb-1 break-words">
                    End Date: {selectedDates[item.id].endDate.toISOString().split('T')[0]}
                  </p>
                )}
                {errors[item.id] && (
                  <p className="text-red-500 text-sm mt-1">{errors[item.id]}</p>
                )}
              </div>

              <div className="flex flex-wrap space-x-2 mt-4 sm:mt-4">
                <button
                  onClick={() => onIncrease(item)}
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-150 ease-in-out"
                >
                  +
                </button>
                <button
                  onClick={() => onDecrease(item)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 transition duration-150 ease-in-out"
                >
                  -
                </button>
                <button
                  onClick={() => onRemove(item)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-150 ease-in-out"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <h3 className="text-2xl font-bold text-gray-900 mt-6">Total: ${total.toFixed(2)}</h3>
      <div className="flex justify-center">
        <Link to="/checkout" onClick={handleCheckout}>
          <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition duration-150 ease-in-out">
            Check Out
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
