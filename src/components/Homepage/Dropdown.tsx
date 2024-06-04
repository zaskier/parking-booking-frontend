import React, { useState } from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  onSelect?: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    onSelect?.(option); // Optional callback handling
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="  rounded-md focus:outline-none px-4 py-4 flex items-center justify-between w-full bg-main-gray m-3 "
        onClick={toggleDropdown}
      >
        <span>{label}</span>
        <svg
          className="transform transition duration-200 ease-in-out h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <ul
          className="absolute top-0 left-0 w-full bg-white shadow-md rounded-md py-2 z-50"
        >
          {options.map((option) => (
            <li
              key={option}
              className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;