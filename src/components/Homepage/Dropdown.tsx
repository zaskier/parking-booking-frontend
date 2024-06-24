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
        className="m-3 flex w-full items-center justify-between rounded-md bg-main-gray px-4 py-4 focus:outline-none"
        onClick={toggleDropdown}>
        <span>{label}</span>
        <svg
          className="h-4 w-4 transform transition duration-200 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute left-0 top-0 z-50 w-full rounded-md bg-white py-2 shadow-md">
          {options.map((option) => (
            <li
              key={option}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
