import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { MdExplore, MdLibraryMusic, MdMenu, MdClose, MdSearch, MdHome } from 'react-icons/md';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: IoMdHome },
    { name: 'Explore', path: '/explore', icon: MdExplore },
    { name: 'Library', path: '/library', icon: MdLibraryMusic },
  ];
   
  return (
    <div className='flex'>
      <div className="lg:block w-14 h-screen bg-gray-950 text-white  fixed">
        
        
     
        <nav className="space-y- ml-4 text-xs mt-16 ">
            <ul className=' space-y-8 '>
              <li className='-ml-2'> <MdHome className='w-4 h-4 ml-1 '/>Home</li>
              <li className='-ml-2'> <MdExplore className='w-4  h-6 ml-2'/> Explore</li>
              <li className='-ml-2'> <MdLibraryMusic className='w-4 h-6 ml-2'/> Library</li>
            </ul>
          </nav>
          </div>

      <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2bg-gradient-to-b from-black to-gray-900  text-white fixed top-4 left-4 z-50 rounded-md"
      >
        {isOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
      </button>

    
      {isOpen && (
        <div className="fixed left-0 w-60 bg-gradient-to-b from-black to-gray-900  text-white h-full z-40 p-4 transition-duration:700ms;">
          <nav className="space-y-4 mt-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 p-2 rounded-md ${
                  location.pathname === item.path ? 'bg-gradient-to-b from-black to-gray-900' : ''
                }`}
              >
                <item.icon className=" w-6 h-6" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
    </div>
  );
  
};

export default Sidebar;

