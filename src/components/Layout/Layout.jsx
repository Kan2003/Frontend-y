import React, { useState, createContext } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

// Create the SearchContext
export const SearchContext = createContext();

const Layout = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 bg-gray-100 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default Layout;
