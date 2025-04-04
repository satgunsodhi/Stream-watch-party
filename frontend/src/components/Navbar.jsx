import React from 'react';
import { Search, User } from 'lucide-react';

const Navbar = ({ searchQuery, onSearchChange }) => {
  return (
    <nav className="navbar" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="navbar-logo">
        <a href="/" className="navbar-logo-link">STREAMFLIX</a>
      </div>
      <div className="navbar-right">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input 
            type="search" 
            className="search-bar" 
            placeholder="Search movies..." 
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <User size={24} color="white" />
      </div>
    </nav>
  );
};

export default Navbar;