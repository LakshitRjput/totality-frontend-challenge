

import React, { useState, useEffect } from 'react';
import PropertyList from '../components/PropertyList';
import NavBar from '../components/NavBar';

function HomePage({ onBook,setCartItems }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignup, setIsSignup] = useState(true); // Toggle between Signup and Login
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const sessionStatus = sessionStorage.getItem('isAuthenticated');
    
    if (!sessionStatus) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  const handleScrollToProperties = () => {
    const propertyListSection = document.getElementById('property-list-section');
    if (propertyListSection) {
      propertyListSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    // Simulate saving credentials
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    setIsSignup(false);
    setMessage('Signup successful! Please log in.');
  };

  const handleLogin = () => {
    // Simulate credential validation
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(user => user.username === formData.username && user.password === formData.password);

    if (user) {
      sessionStorage.setItem('isAuthenticated', 'true');

      // localStorage.setItem('loggedInUser', user.username);
      sessionStorage.setItem('username', user.username);

      setIsAuthenticated(true);
    } else {
      setMessage('Incorrect credentials, please try again.');
    }
  };

  const handleContinueWithoutRegistration = () => {
    // Bypass registration and allow access to PropertyList
    sessionStorage.setItem('isAuthenticated', 'true');
    sessionStorage.removeItem('username');
    setIsAuthenticated(true);
  };


  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      sessionStorage.removeItem('isAuthenticated');
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        sessionStorage.removeItem('isAuthenticated');
      });
    };
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {isSignup ? 'Sign Up' : 'Log In'}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              isSignup ? handleSignup() : handleLogin();
            }}
          >
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            {message && <p className="text-red-500 text-sm mt-1">{message}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-150 ease-in-out"
            >
              {isSignup ? 'Sign Up' : 'Log In'}
            </button>
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="w-full mt-4 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-150 ease-in-out"
            >
              {isSignup ? 'Already have an account? Log In' : 'Need an account? Sign Up'}
            </button>
            <button
              type="button"
              onClick={handleContinueWithoutRegistration}
              className="w-full mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-150 ease-in-out"
            >
              Continue Without Registration
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
    <NavBar setIsAuthenticated={setIsAuthenticated} setCartItems={setCartItems}/>
    <div className="bg-gray-100 min-h-screen">
    <div 
  className="relative h-96 bg-cover bg-center flex items-center justify-start"
  style={{ backgroundImage: 'url("/images/home.jpg")' }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10 text-left text-white pl-4 md:pl-10">
    <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">Checkout Our</h1>
    <h1 className="text-3xl md:text-5xl font-bold mb-4">Properties for Rent</h1>

    <button 
      onClick={handleScrollToProperties}
      className="bg-orange-300 hover:bg-orange-400 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg"
    >
      View Properties
    </button>
  </div>
</div>


      {/* Property List Section */}
      <div id="property-list-section" className="p-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Property Listings</h2>
        <PropertyList onBook={onBook} />
      </div>
    </div>
    </>
  );
}

export default HomePage;

