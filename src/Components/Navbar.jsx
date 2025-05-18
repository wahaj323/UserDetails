import React from 'react';
import { useUserStore } from '../Store/UserStore';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">UserDetails</h1>

        {/* Nav Links */}
        <div className="flex space-x-6 text-lg font-medium">
            <Link to="/" className="hover:text-gray-200 transition">Home</Link>
            <Link to="/add-user" className="hover:text-gray-200 transition">Add User</Link>
            <Link to="/view-users" className="hover:text-gray-200 transition">View Users</Link>

        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
